module.exports = {
  getFeeds: function(feed) {
    var entry = feed.entry ? this.getEntries(feed.entry) : [];
    var total = Number(feed.openSearch$totalResults.$t);
    var start = Number(feed.openSearch$startIndex.$t);
    var pages = Math.ceil(total / Number(feed.openSearch$itemsPerPage.$t)) || 1;
    var data = {
      total: total,
      start: start,
      pages: pages,
      entry: entry
    };
    return data;
  },
  getLabels: function(feed, order, pages, limit) {
    var entry = feed.category ? this.getLabelPost(feed.category) : [];
    var total = Number(entry.length);
    var start = pages > 1 ? parseInt(limit * pages - (limit - 1)) : 1;
    var begin = start <= 1 ? 0 : start - 1;
    var entries = [];
    for (var i = 0; i < total; i++) {
      var obj = {};
      obj.id = encodeURIComponent(entry[i]);
      obj.title = entry[i];
      entries.push(obj);
    }
    entries.sort(function(a, b) {
      var indexA = a.title.toLowerCase(),
        indexB = b.title.toLowerCase();
      if (order === "asc") {
        return indexA.localeCompare(indexB);
      } else {
        return indexB.localeCompare(indexA);
      }
    });
    var data = {
      total: total,
      start: start,
      pages: Math.ceil(total / limit) || 1,
      entry: entries.slice(begin, begin + limit)
    };
    return data;
  },
  getEntry: function(entry, json) {
    var content = entry.content ? entry.content.$t : entry.summary ? entry.summary.$t : null;
    var data = {
      title: this.getTitle(entry.title),
      label: this.getLabelPost(entry.category),
      updated: this.getTimes(entry.updated),
      published: this.getTimes(entry.published),
      content: this.getContentPost(content, json)
    };
    return data;
  },
  getEntries: function(entry) {
    var data = [];
    for (var i = 0; i < entry.length; i++) {
      data.push({
        id: this.getIdEntry(entry[i].id),
        title: this.getTitle(entry[i].title),
        label: this.getLabelPost(entry[i].category),
        updated: this.getTimes(entry[i].updated),
        published: this.getTimes(entry[i].published)
      });
    }
    return data;
  },
  getIdEntry: function(id) {
    if (id && id.$t) return id.$t.replace(/.*post-/, "").replace(/.*page-/, "");
    return "Unknown ID";
  },
  getTitle: function(title) {
    if (title && title.$t) return title.$t;
    return "No Title";
  },
  getTimes: function(time) {
    if (time && time.$t) {
      return time.$t;
    }
    return null;
  },
  getLabelPost: function(data, sort) {
    var label = [];
    var length = data ? data.length : 0;
    for (var i = 0; i < length; i++) {
      label.push(data[i].term);
    }
    label.sort(function(a, b) {
      var sortA = a.toUpperCase();
      var sortB = b.toUpperCase();
      if (sort === "za") return sortB.localeCompare(sortA);
      return sortA.localeCompare(sortB);
    });
    return label;
  },
  getContentPost: function(content, json) {
    try {
      return JSON.parse(content);
    } catch (e) {
      if (json) {
        if (e instanceof SyntaxError) return e.name;
        return e.message;
      }
      return content;
    }
  }
};

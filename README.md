# Blogger API Netlify

[![Netlify Demo](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://blogger-api.netlify.com) [![Netlify Deploy](https://camo.githubusercontent.com/be2eb66bb727e25655f1dcff88c2fdca82a77513/68747470733a2f2f7777772e6e65746c6966792e636f6d2f696d672f6465706c6f792f627574746f6e2e737667)](https://app.netlify.com/start/deploy?repository=https://github.com/setdjod/blogger-api-netlify) [![Netlify Status](https://api.netlify.com/api/v1/badges/376e3dd9-07d8-43a4-9643-f11e34d0c9ff/deploy-status)](https://app.netlify.com/sites/blogger-api/deploys)

## Table of Contents

- [Setup](#setup)
- [Running localy](#run-localy)
- [Get All Label](#all-label)
- [Get Spesific Label](#spesific-label)
- [Get All Pages](#all-pages)
- [Get Spesific Pages](#spesific-pages)
- [Get All Posts](#all-posts)
- [Get Spesific Posts](#spesific-posts)

## Setup

```bash
npm install
```

## Run Localy

```bash
npm run serve
```

## All Label

- Production: <https://blogger-api.netlify.com/.netlify/functions/label>
- Development: <https://debug--blogger-api.netlify.com/.netlify/functions/label>

| Query         | Type             | Default | Description |
| ------------- |:----------------:| :------:| - |
| blogid       | number           | -       | - |
| order         | enum (asc, desc) | asc     | - |
| limit         | number           | 5       | - |
| pages         | number           | 1       | - |

## Spesific Label

- Production: <https://blogger-api.netlify.com/.netlify/functions/label/:id>
- Development: : <https://debug--blogger-api.netlify.com/.netlify/functions/label/:id>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid       | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## All Pages

- Production: <https://blogger-api.netlify.com/.netlify/functions/pages>
- Development: : <https://debug--blogger-api.netlify.com/.netlify/functions/pages>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid       | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## Spesific Pages

- Production: <https://blogger-api.netlify.com/.netlify/functions/pages/:id>
- Development: : <https://debug--blogger-api.netlify.com/.netlify/functions/pages/:id>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid       | number                    | -         | - |
| isjson        | boolean                   | false     | - |

## All Posts

- Production: <https://blogger-api.netlify.com/.netlify/functions/posts>
- Development: : <https://debug--blogger-api.netlify.com/.netlify/functions/posts>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid       | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## Spesific Posts

- Production: <https://blogger-api.netlify.com/.netlify/functions/posts/:id>
- Development: : <https://debug--blogger-api.netlify.com/.netlify/functions/posts/:id>

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid       | number                    | -         | - |
| isjson        | boolean                   | false     | - |

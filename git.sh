#!/bin/bash
# Auto Push


# git init
# git remote add origin git@github.com:setdjod/blogger-api-netlify.git
git pull
git add .
git commit -m "Update"
git push

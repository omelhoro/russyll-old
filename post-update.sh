#!/bin/sh

echo
echo "**** Deploy changes ****"
echo

# go to checkout directory
echo "${PWD##*/}"
cd /home/igorf/apps/russyll || exit
unset GIT_DIR

# pull code and build image
git pull origin master
docker build --no-cache -t russyll .

# restart container
docker stop russyll_ins || echo "Not running!"
docker rm russyll_ins || echo "Does not exist!"
docker run -it -p 5002:5000 -d --name russyll_ins russyll

exec git-update-server-info

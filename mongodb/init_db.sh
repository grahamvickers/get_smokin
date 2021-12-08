#!/bin/bash
set -e

mongoimport --jsonArray -d ${MONGO_INITDB_DATABASE} -c recipes --file /docker-entrypoint-initdb.d/recipes.json

mongoimport --jsonArray -d ${MONGO_INITDB_DATABASE} -c posts --file /docker-entrypoint-initdb.d/blog.json

mongo <<EOF
use $MONGO_INITDB_DATABASE
db.createUser({
  user:  '$MONGO_INITDB_ROOT_USERNAME',
  pwd: '$MONGO_INITDB_ROOT_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_INITDB_DATABASE'
  }]
});
EOF
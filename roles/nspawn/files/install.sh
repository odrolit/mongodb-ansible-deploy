#!/usr/bin/sh

echo "adding mongodb key to apt"
cat /root/mongodb-server-4.4.asc | apt-key add -

echo "adding mongodb to sources"
echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list

echo "running apt-get update"
apt-get update

echo "installing mongodb-org"
apt-get install -y -f mongodb-org

echo "reloading systemctl"
systemctl daemon-reload

echo "enabling mongod"
systemctl enable mongod

echo "starting mongod"
systemctl start mongod


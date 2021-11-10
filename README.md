# mongodb-ansible-deploy
mongodb 4.4 sharded cluster ansible deploy on debian 10 using nspawn containers

## overview

### starting with 3 (virtual) fresh installed debian 10 servers with one IP address each:
- 1.mydomain.net
- 2.mydomain.net
- 3.mydomain.net

### ending with mongodb sharded cluster with authorization and TLS/certificate* protected communication. Sharding is enabled on the example database and few collections are sharded. Cluster runs inside 15 nspawn containers equally distributed over the 3 servers:

- config server consisting of 3-member replica set:
  - ipapi-mongo-config-1.mydomain.net
  - ipapi-mongo-config-2.mydomain.net
  - ipapi-mongo-config-3.mydomain.net

- 3 mongos servers:
  - ipapi-mongo-server-1.mydomain.net
  - ipapi-mongo-server-2.mydomain.net
  - ipapi-mongo-server-3.mydomain.net

- 3 shards, each with 3-member replica set:
  - ipapi-mongo-shard1-1.mydomain.net
  - ipapi-mongo-shard1-2.mydomain.net
  - ipapi-mongo-shard1-3.mydomain.net
  - ipapi-mongo-shard2-1.mydomain.net
  - ipapi-mongo-shard2-2.mydomain.net
  - ipapi-mongo-shard2-3.mydomain.net
  - ipapi-mongo-shard3-1.mydomain.net
  - ipapi-mongo-shard3-2.mydomain.net
  - ipapi-mongo-shard3-3.mydomain.net


*certificates are not included


## howto

### change mydomain , you can use these scripts from project folder:
<pre>
find . -type f -exec sed -i 's/mydomain/newdomain/g' {} +
cd roles/mongo/files/
   for i in ipapi-mongo-*; do a=$(echo $i | awk -F '.' '{print $1}'); c=$(echo $i | awk -F '.' '{print $3}'); d=$(echo $i | awk -F '.' '{print $4}'); mv $i "$a.newdomain.$c.$d"; done
 cd ../../../
</pre>

### change hosts, NTP and DNS settings in these files:
- inventory.yml
- roles/ipapi/files/timesyncd.conf
- roles/ipapi/templates/ens192.network

### insert certficates and keys to all .key and .pem files in roles/mongo/files/ directory

### run the playbook
<pre>
ansible-playbook -i inventory.yml ipapi.yml
</pre>

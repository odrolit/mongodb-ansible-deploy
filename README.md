# mongodb-ansible-deploy
mongodb sharded cluster ansible deploy on debian 10 using nspawn containers

## overview

### starting with 3 (virtual) fresh installed debian 10 servers with one IP address each.

### ending with mongodb sharded cluster with authorization and TLS/certificate protected communication. Sharding is enabled on the example database and few collections are sharded. Cluster runs on 15 nspawn containers:

config server with 3-member replica set:
- ipapi-mongo-config-1.mydomain.net
- ipapi-mongo-config-2.mydomain.net
- ipapi-mongo-config-3.mydomain.net

3 mongos servers:
- ipapi-mongo-server-1.mydomain.net
- ipapi-mongo-server-2.mydomain.net
- ipapi-mongo-server-3.mydomain.net

3 shards, each with 3-member replica set:
- ipapi-mongo-shard1-1.mydomain.net
- ipapi-mongo-shard1-2.mydomain.net
- ipapi-mongo-shard1-3.mydomain.net
- ipapi-mongo-shard2-1.mydomain.net
- ipapi-mongo-shard2-2.mydomain.net
- ipapi-mongo-shard2-3.mydomain.net
- ipapi-mongo-shard3-1.mydomain.net
- ipapi-mongo-shard3-2.mydomain.net
- ipapi-mongo-shard3-3.mydomain.net



## howto


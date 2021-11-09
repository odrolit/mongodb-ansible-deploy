printjson(
  sh.addShard(
      "ipapi-mongo-shard1/ipapi-mongo-shard1-1.{{ my_domain }}.net:27021,ipapi-mongo-shard1-2.{{ my_domain }}.net:27021,ipapi-mongo-shard1-3.{{ my_domain }}.net:27021"
  )
)
printjson(
  sh.addShard(
      "ipapi-mongo-shard2/ipapi-mongo-shard2-1.{{ my_domain }}.net:27022,ipapi-mongo-shard2-2.{{ my_domain }}.net:27022,ipapi-mongo-shard2-3.{{ my_domain }}.net:27022"
  )
)
printjson(
  sh.addShard(
      "ipapi-mongo-shard3/ipapi-mongo-shard3-1.{{ my_domain }}.net:27023,ipapi-mongo-shard3-2.{{ my_domain }}.net:27023,ipapi-mongo-shard3-3.{{ my_domain }}.net:27023"
  )
)

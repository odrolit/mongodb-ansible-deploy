printjson(
  rs.initiate(
    {
      "_id" : "ipapi-mongo-config",
      "configsvr" : true,
      "members" : [
        { "_id": 1, "host": "ipapi-mongo-config-1.{{ my_domain }}.net:27019" },
        { "_id": 2, "host": "ipapi-mongo-config-2.{{ my_domain }}.net:27019" },
        { "_id": 3, "host": "ipapi-mongo-config-3.{{ my_domain }}.net:27019" },
      ]
    }
  )
)

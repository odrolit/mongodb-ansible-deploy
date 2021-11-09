printjson(
  db.createUser(
    {
      user : "{{ mongo_user }}",
      pwd : "{{ mongo_password }}",
      roles : [ { role: "root", db: "admin" } ]
    }
  )
)

printjson(
  rs.initiate(
    {
{% set hostlist = inventory_hostname.split('-') %}
{% set hostpart = hostlist[0] ~ '-' ~ hostlist[1] ~ '-' ~ hostlist[2] %}
{% set numpart = hostpart[-1] %}
      "_id" : "{{ hostpart }}",
      "members" : [
        { "_id": 1, "host": "{{ hostpart }}-1.{{ my_domain }}.net:2702{{ numpart}}" },
        { "_id": 2, "host": "{{ hostpart }}-2.{{ my_domain }}.net:2702{{ numpart}}" },
        { "_id": 3, "host": "{{ hostpart }}-3.{{ my_domain }}.net:2702{{ numpart}}" },
      ]
    }
  )
)

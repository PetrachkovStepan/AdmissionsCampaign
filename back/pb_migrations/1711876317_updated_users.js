/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.name = "enrollees"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztzenmi9",
    "name": "passport",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 14,
      "max": 14,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjh2o4gk",
    "name": "enrolle_password",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 6,
      "max": 32,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hbatng5",
    "name": "education_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "budget",
        "paid",
        "target"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elqdcmuz",
    "name": "speciality_count",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 15,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnnpppg9",
    "name": "score",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 400,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.name = "users"

  // remove
  collection.schema.removeField("ztzenmi9")

  // remove
  collection.schema.removeField("gjh2o4gk")

  // remove
  collection.schema.removeField("9hbatng5")

  // remove
  collection.schema.removeField("elqdcmuz")

  // remove
  collection.schema.removeField("jnnpppg9")

  return dao.saveCollection(collection)
})

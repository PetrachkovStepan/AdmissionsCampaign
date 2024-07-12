/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("ztzenmi9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vri4uapd",
    "name": "user_password",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

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

  // remove
  collection.schema.removeField("vri4uapd")

  return dao.saveCollection(collection)
})

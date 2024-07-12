/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78q14icxu1y1q7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phfihcll",
    "name": "user_password",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 6,
      "max": 30,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78q14icxu1y1q7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phfihcll",
    "name": "passwords",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 6,
      "max": 30,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

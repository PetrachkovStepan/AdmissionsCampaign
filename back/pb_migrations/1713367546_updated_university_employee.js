/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78q14icxu1y1q7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aggcny3a",
    "name": "phone",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78q14icxu1y1q7t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aggcny3a",
    "name": "phone",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})

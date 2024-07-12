/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2odubb879dstuqt")

  // remove
  collection.schema.removeField("iwbe5v7q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5kuvhn8",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "military",
        "orphans",
        "other"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2odubb879dstuqt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwbe5v7q",
    "name": "type",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("t5kuvhn8")

  return dao.saveCollection(collection)
})

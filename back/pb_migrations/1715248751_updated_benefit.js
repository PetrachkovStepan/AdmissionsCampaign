/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2odubb879dstuqt")

  // update
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
        "other",
        "blank"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2odubb879dstuqt")

  // update
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
})

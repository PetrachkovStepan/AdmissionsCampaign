/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5e2kzp10b1snjb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cicqrtwc",
    "name": "num",
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
  const collection = dao.findCollectionByNameOrId("g5e2kzp10b1snjb")

  // remove
  collection.schema.removeField("cicqrtwc")

  return dao.saveCollection(collection)
})

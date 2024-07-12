/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsgssdgm",
    "name": "approved",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk")

  // remove
  collection.schema.removeField("tsgssdgm")

  return dao.saveCollection(collection)
})

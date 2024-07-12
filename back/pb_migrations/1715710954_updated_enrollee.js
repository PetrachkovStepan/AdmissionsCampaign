/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuu1rgtiiywkh7b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxnznfdo",
    "name": "enrolled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuu1rgtiiywkh7b")

  // remove
  collection.schema.removeField("xxnznfdo")

  return dao.saveCollection(collection)
})

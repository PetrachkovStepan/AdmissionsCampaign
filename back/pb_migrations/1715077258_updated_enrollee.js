/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuu1rgtiiywkh7b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pw4tuhgn",
    "name": "applied",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qgnxzrp",
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
  const collection = dao.findCollectionByNameOrId("kuu1rgtiiywkh7b")

  // remove
  collection.schema.removeField("pw4tuhgn")

  // remove
  collection.schema.removeField("4qgnxzrp")

  return dao.saveCollection(collection)
})

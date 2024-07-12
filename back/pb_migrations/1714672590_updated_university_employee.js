/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9isp8bj0tjq0mg")

  // remove
  collection.schema.removeField("5fo2nnqe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u5jhrpgj",
    "name": "phone",
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
  const collection = dao.findCollectionByNameOrId("v9isp8bj0tjq0mg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5fo2nnqe",
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

  // remove
  collection.schema.removeField("u5jhrpgj")

  return dao.saveCollection(collection)
})

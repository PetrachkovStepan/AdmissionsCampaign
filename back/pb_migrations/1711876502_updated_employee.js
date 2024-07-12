/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  collection.name = "ct"

  // remove
  collection.schema.removeField("kcu4hiof")

  // remove
  collection.schema.removeField("vda18o9p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eooq20cc",
    "name": "score",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  collection.name = "employee"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kcu4hiof",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vda18o9p",
    "name": "password",
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

  // remove
  collection.schema.removeField("eooq20cc")

  return dao.saveCollection(collection)
})

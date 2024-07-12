/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78q14icxu1y1q7t")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "miylneph",
    "name": "role",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l32y4dan",
    "name": "department",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1o9jsa9e",
    "name": "info",
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
  const collection = dao.findCollectionByNameOrId("78q14icxu1y1q7t")

  // remove
  collection.schema.removeField("phfihcll")

  // remove
  collection.schema.removeField("miylneph")

  // remove
  collection.schema.removeField("aggcny3a")

  // remove
  collection.schema.removeField("l32y4dan")

  // remove
  collection.schema.removeField("1o9jsa9e")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5e2kzp10b1snjb")

  // remove
  collection.schema.removeField("osf5ywpg")

  // remove
  collection.schema.removeField("4dxk593e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dagihmsx",
    "name": "birth_date",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1cfpn0zp",
    "name": "given_date",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "osf5ywpg",
    "name": "birth_date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4dxk593e",
    "name": "given_date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("dagihmsx")

  // remove
  collection.schema.removeField("1cfpn0zp")

  return dao.saveCollection(collection)
})

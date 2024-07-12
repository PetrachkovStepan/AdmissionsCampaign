/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ekropzbz",
    "name": "benefitMBarrier",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgextkt1",
    "name": "benefitOBarrier",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk")

  // remove
  collection.schema.removeField("ekropzbz")

  // remove
  collection.schema.removeField("jgextkt1")

  return dao.saveCollection(collection)
})

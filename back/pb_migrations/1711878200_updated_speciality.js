/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7mcfztnz",
    "name": "student_count",
    "type": "number",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7mcfztnz",
    "name": "student_count",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})

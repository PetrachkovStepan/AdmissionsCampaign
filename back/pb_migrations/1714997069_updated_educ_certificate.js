/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "toq8xqv8",
    "name": "doc",
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
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p")

  // remove
  collection.schema.removeField("toq8xqv8")

  return dao.saveCollection(collection)
})

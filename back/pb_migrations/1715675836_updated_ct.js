/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbpwolxw",
    "name": "mark",
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

  // remove
  collection.schema.removeField("lbpwolxw")

  return dao.saveCollection(collection)
})

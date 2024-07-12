/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuu1rgtiiywkh7b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "30wiykas",
    "name": "username_l",
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
  const collection = dao.findCollectionByNameOrId("kuu1rgtiiywkh7b")

  // remove
  collection.schema.removeField("30wiykas")

  return dao.saveCollection(collection)
})

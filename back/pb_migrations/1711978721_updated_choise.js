/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3vp73mnvfi68at")

  collection.name = "choice"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ucarnlvl",
    "name": "speciality_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "d8dmhiw24po0gvk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckwrqita",
    "name": "enrollee_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3vp73mnvfi68at")

  collection.name = "choise"

  // remove
  collection.schema.removeField("ucarnlvl")

  // remove
  collection.schema.removeField("ckwrqita")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3vp73mnvfi68at")

  // update
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
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3vp73mnvfi68at")

  // update
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

  return dao.saveCollection(collection)
})

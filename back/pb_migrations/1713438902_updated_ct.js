/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  // remove
  collection.schema.removeField("fjsstvtg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivcnnunk",
    "name": "enrollee_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kuu1rgtiiywkh7b",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjsstvtg",
    "name": "enrollee_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("ivcnnunk")

  return dao.saveCollection(collection)
})

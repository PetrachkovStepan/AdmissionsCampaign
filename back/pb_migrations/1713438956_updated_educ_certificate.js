/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p")

  // remove
  collection.schema.removeField("kpbbwzg3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwys6ydi",
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
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kpbbwzg3",
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
  collection.schema.removeField("cwys6ydi")

  return dao.saveCollection(collection)
})

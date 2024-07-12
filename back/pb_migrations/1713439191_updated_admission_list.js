/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f12gonsh8foj29j")

  // remove
  collection.schema.removeField("ey9nxsa5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cki8p6fb",
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
  const collection = dao.findCollectionByNameOrId("f12gonsh8foj29j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ey9nxsa5",
    "name": "enrollee_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("cki8p6fb")

  return dao.saveCollection(collection)
})

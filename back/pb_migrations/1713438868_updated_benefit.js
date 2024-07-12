/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2odubb879dstuqt")

  // remove
  collection.schema.removeField("rtheswnt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxkjizrx",
    "name": "enrollee_id",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kuu1rgtiiywkh7b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2odubb879dstuqt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rtheswnt",
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

  // remove
  collection.schema.removeField("zxkjizrx")

  return dao.saveCollection(collection)
})

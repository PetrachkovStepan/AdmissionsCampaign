/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f12gonsh8foj29j",
    "created": "2024-03-31 09:58:48.272Z",
    "updated": "2024-03-31 09:58:48.272Z",
    "name": "admissian_list",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "1emzdrx0",
        "name": "speciality_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "d8dmhiw24po0gvk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f12gonsh8foj29j");

  return dao.deleteCollection(collection);
})

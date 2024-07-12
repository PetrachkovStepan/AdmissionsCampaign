/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "d8dmhiw24po0gvk",
    "created": "2024-03-31 09:40:59.923Z",
    "updated": "2024-03-31 09:40:59.923Z",
    "name": "speciality",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bxj16xmj",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("d8dmhiw24po0gvk");

  return dao.deleteCollection(collection);
})

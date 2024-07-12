/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "irsu2g8oh6fphqo",
    "created": "2024-03-31 08:55:26.390Z",
    "updated": "2024-03-31 08:55:26.390Z",
    "name": "enrollee",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kcu4hiof",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "vda18o9p",
        "name": "password",
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
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo");

  return dao.deleteCollection(collection);
})

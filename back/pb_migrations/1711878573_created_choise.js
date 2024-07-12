/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y3vp73mnvfi68at",
    "created": "2024-03-31 09:49:33.547Z",
    "updated": "2024-03-31 09:49:33.547Z",
    "name": "choise",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tvsz50mo",
        "name": "priority",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 18,
          "noDecimal": true
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
  const collection = dao.findCollectionByNameOrId("y3vp73mnvfi68at");

  return dao.deleteCollection(collection);
})

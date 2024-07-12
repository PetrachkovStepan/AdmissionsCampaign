/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v9isp8bj0tjq0mg",
    "created": "2024-04-18 11:21:32.597Z",
    "updated": "2024-04-18 11:21:32.597Z",
    "name": "university_employee_duplicate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hjx77hgd",
        "name": "user_password",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e0b4v8nm",
        "name": "role",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "5fo2nnqe",
        "name": "phone",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "tdu6igrj",
        "name": "department",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pwjiqaby",
        "name": "info",
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
  const collection = dao.findCollectionByNameOrId("v9isp8bj0tjq0mg");

  return dao.deleteCollection(collection);
})

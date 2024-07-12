/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zuvquwl1j5i5j6p",
    "created": "2024-03-31 09:30:32.716Z",
    "updated": "2024-03-31 09:30:32.716Z",
    "name": "educ_certificate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jdckeyut",
        "name": "score",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "om0eqjwd",
        "name": "physics",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "59r3jney",
        "name": "math",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "smco2j0z",
        "name": "chemistry",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "ccm2fzme",
        "name": "english",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "cafnukli",
        "name": "russian",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "8hqzpxch",
        "name": "belarussian",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "cje9mjrm",
        "name": "biology",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10,
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
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p")

  // remove
  collection.schema.removeField("om0eqjwd")

  // remove
  collection.schema.removeField("59r3jney")

  // remove
  collection.schema.removeField("smco2j0z")

  // remove
  collection.schema.removeField("ccm2fzme")

  // remove
  collection.schema.removeField("cafnukli")

  // remove
  collection.schema.removeField("8hqzpxch")

  // remove
  collection.schema.removeField("cje9mjrm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q60iclhl",
    "name": "level",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkldcgcy",
    "name": "school_type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3sfxmxy",
    "name": "school_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fiilvkhh",
    "name": "educ_date",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yowo9xum",
    "name": "doc_num",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsvzattv",
    "name": "foreign_language",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zuvquwl1j5i5j6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "om0eqjwd",
    "name": "physics",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "59r3jney",
    "name": "math",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smco2j0z",
    "name": "chemistry",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ccm2fzme",
    "name": "english",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cafnukli",
    "name": "russian",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8hqzpxch",
    "name": "belarussian",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cje9mjrm",
    "name": "biology",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("q60iclhl")

  // remove
  collection.schema.removeField("wkldcgcy")

  // remove
  collection.schema.removeField("n3sfxmxy")

  // remove
  collection.schema.removeField("fiilvkhh")

  // remove
  collection.schema.removeField("yowo9xum")

  // remove
  collection.schema.removeField("rsvzattv")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "en8ogowf",
    "name": "subject",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "math",
        "physics",
        "english",
        "russian",
        "belarussian",
        "chemistry",
        "biology"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  // remove
  collection.schema.removeField("en8ogowf")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  collection.name = "employee"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irsu2g8oh6fphqo")

  collection.name = "enrollee"

  return dao.saveCollection(collection)
})

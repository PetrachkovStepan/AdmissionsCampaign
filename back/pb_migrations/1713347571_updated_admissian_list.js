/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f12gonsh8foj29j")

  collection.name = "admission_list"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f12gonsh8foj29j")

  collection.name = "admissian_list"

  return dao.saveCollection(collection)
})

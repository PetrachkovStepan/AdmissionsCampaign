/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9isp8bj0tjq0mg")

  collection.name = "university_employee"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9isp8bj0tjq0mg")

  collection.name = "university_employee_duplicate"

  return dao.saveCollection(collection)
})

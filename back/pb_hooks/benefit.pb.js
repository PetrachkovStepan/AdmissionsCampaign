
//http://127.0.0.1:8090/api/

// GET BY ENROLLEE
routerAdd("GET", "/applicant-api/benefit/getallbyenrollee/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");

    const records = $app.dao().findRecordsByFilter(
        "benefit",                                 // collection
        "enrollee_id = '" + enrollee_id + "'",// filter
        "type",                                    // sort
        10,                                         // limit
        0);
        console.log(records)
   
    return c.json(200,  records )
})

// GET ONE
routerAdd("GET", "/applicant-api/benefit/getone/:id", (c) => {
    
    let id = c.pathParam("id");

    const records = $app.dao().findRecordById(
        "benefit", id);
   
    return c.json(200, { records })
})

//Create
routerAdd("POST", "/applicant-api/benefit/createdenefit/:name/:enrollee_id",  (c) => {
    
     let name = c.pathParam("name");
     let enrollee_id = c.pathParam("enrollee_id");

    const collection = $app.dao().findCollectionByNameOrId("benefit")

    const record = new Record(collection, {
        "name": name,
        "type": "type",
        "enrollee_id": enrollee_id
    })

    $app.dao().saveRecord(record)
    
})

// DELETE
routerAdd("DELETE", "/applicant-api/benefit/delete/:id", (c) => {
    
    let id = c.pathParam("id");

    const record = $app.dao().findRecordById("benefit", id)

    $app.dao().deleteRecord(record)  
})

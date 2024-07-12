
//http://127.0.0.1:8090/api/

// GET BY ENROLLEE
routerAdd("GET", "/applicant-api/choice/getallbyenrollee/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    
    console.log(enrollee_id)

    const records = $app.dao().findRecordsByFilter(
        "choice",                                   // collection
        "enrollee_id = '" + enrollee_id + "'",      // filter
        "priority",                                 // sort
        15,                                         // limit
        0);
   
    return c.json(200, { records })
})

// GET ONE Priority
routerAdd("GET", "/applicant-api/choice/getone/:priority/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    let priority = parseInt(c.pathParam("priority"));
     
    console.log(enrollee_id)

    const records = $app.dao().findFirstRecordByFilter(
        "choice", "enrollee_id = '" + enrollee_id + "' && priority = '" + priority + "'",
        );
   
    return c.json(200, { records })
})

//Create
routerAdd("POST", "/applicant-api/choice/create/:priority/:speciality_id/:enrollee_id",  (c) => {
    
     let priority = c.pathParam("priority");
     let speciality_id = c.pathParam("speciality_id");
     let enrollee_id = c.pathParam("enrollee_id");

    const collection = $app.dao().findCollectionByNameOrId("choice")

    const record = new Record(collection, {
        "priority": priority,
        "speciality_id": speciality_id,
        "enrollee_id": enrollee_id
    })

    $app.dao().saveRecord(record)
})

// DELETE
routerAdd("DELETE", "/applicant-api/choice/delete/:id", (c) => {
    
    let id = c.pathParam("id");

    const record = $app.dao().findRecordById("choice", id)

    $app.dao().deleteRecord(record)  
})

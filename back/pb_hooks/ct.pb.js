
//http://127.0.0.1:8090/api/

// GET BY ENROLLEE
routerAdd("GET", "/applicant-api/ct/getallbyenrollee/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    
    console.log(enrollee_id)

    const records = $app.dao().findRecordsByFilter(
        "ct",                                 // collection
        "enrollee_id = '" + enrollee_id + "'",// filter
        "score",                                    // sort
        10,                                         // limit
        0);
   
    return c.json(200, { records })
})

// GET ONE
routerAdd("GET", "/applicant-api/ct/getone/:subject/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    let subject = c.pathParam("subject");
    
    console.log(enrollee_id)

    const records = $app.dao().findFirstRecordByFilter(
        "ct", "enrollee_id = '" + enrollee_id + "' && subject = '" + subject + "'",
        );
   
    return c.json(200, { records })
})

//Create
routerAdd("POST", "/applicant-api/ct/create/:score/:subject/:enrollee_id",  (c) => {
    
     let score = c.pathParam("score");
     let subject = c.pathParam("subject");
     let enrollee_id = c.pathParam("enrollee_id");

    const collection = $app.dao().findCollectionByNameOrId("ct")

    const record = new Record(collection, {
        "score": score,
        "subject": subject,
        "enrollee_id": enrollee_id
    })

    $app.dao().saveRecord(record)
})

// DELETE
routerAdd("DELETE", "/applicant-api/ct/delete/:id", (c) => {
    
    let id = c.pathParam("id");

    const record = $app.dao().findRecordById("ct", id)

    $app.dao().deleteRecord(record)  
})

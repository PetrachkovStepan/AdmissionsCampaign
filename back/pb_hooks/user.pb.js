
//http://127.0.0.1:8090/api/

// GET ALL /api/collections/enrollee/getall
routerAdd("GET", "/applicant-api/enrollee/getall", (c) => {
    
    const records = $app.dao().findRecordsByFilter("enrollee");
    console.log(records)

    return c.json(200, { records })
})
routerAdd("GET", "/applicant-api/enrollee/getallfiltered", (c) => {
    
    const records = $app.dao().findRecordsByFilter(
        "enrollee",                                    // collection
        "applied = {:applied} && approved = false", // filter
        "-created",                                   // sort
        100,                                            // limit
        0,                                             // offset
        { applied: true })
         
    console.log(records)

    return c.json(200, { records })
})

// GET ONE BY PARAM
routerAdd("GET", "/applicant-api/enrollee/getoneby/:param/:currency", (c) => {
    
    let param = c.pathParam("param");
    let currency = c.pathParam("currency");
    let user = null;

    try {
    user = $app.dao().findFirstRecordByData(
        "enrollee", param, currency
    )
    } catch (exception) {
        console.log(exception.message)
        return c.json(403, { "message": "UserNotFoundException" })
    }    
    return c.json(200, { user })
})

//Login
routerAdd("GET", "/applicant-api/enrollee/login/:email/:password", (c) => {
    
    let email = c.pathParam("email");
    let password = c.pathParam("password");
    let user = null;

    try {
    user = $app.dao().findFirstRecordByData(
        "enrollee", "email", email
    )
    } catch (exception) {
        console.log(exception.message)
        return c.json(403, { "message": "UserNotFoundException" })
    }    

    if(user.getString("user_password") != password)
        return c.json(403, {"message": "WrongPasswordException"})
    
    return c.json(200, { user })
})

//Register enrollee
routerAdd("POST", "/applicant-api/enrollee/register/:email/:password",  (c) => {
    
     let email = c.pathParam("email");
     let password = c.pathParam("password");

    const collection = $app.dao().findCollectionByNameOrId("enrollee")

    const record = new Record(collection, {
        "username": email,
        "email": email,
        "user_password": password,
        "education_type": "budget",
        "speciality_count": 0,
        "score": 0
    })

    $app.dao().saveRecord(record)
})

//Update
routerAdd("PATCH", "/applicant-api/enrollee/updateuser/:email/:education_type/:speciality_count/:score",  (c) => {
    
    let email = c.pathParam("email");
    let education_type = c.pathParam("education_type");
    let speciality_count = c.pathParam("speciality_count");
    let score = c.pathParam("score");
    let user = null;

    user = $app.dao().findFirstRecordByData(
        "enrollee", "email", email
    )

   user.set("education_type", education_type);
   user.set("speciality_count", speciality_count);
   user.set("score", score);

   $app.dao().saveRecord(user)
})
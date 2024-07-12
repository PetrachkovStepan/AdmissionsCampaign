
//http://127.0.0.1:8090/api/

// GET BY FACULTY 
routerAdd("GET", "/applicant-api/speciality/getallbyfaculty/:faculty", (c) => {
    
    let faculty = c.pathParam("faculty");

    const records = $app.dao().findRecordsByFilter(
        "speciality",                                 // collection
        "faculty = '" + faculty + "'",              // filter
        "name",                                    // sort
        20,                                         // limit
        0);
    console.log(records)

    return c.json(200, { records })
})

// GET ONE BY PARAM
routerAdd("GET", "/applicant-api/speciality/getoneby/:param/:currency", (c) => {
    
    let param = c.pathParam("param");
    let currency = c.pathParam("currency");
    let spec = null;

    try {
        spec = $app.dao().findFirstRecordByData(
        "speciality", param, currency
    )
    } catch (exception) {
        console.log(exception.message)
        return c.json(403, { "message": "SpecNotFoundException" })
    }    
    return c.json(200, { spec })
})

//Create
routerAdd("POST", "/applicant-api/speciality/create/:name/:faculty/:code/:budget_barrier/:paid_barrier/:target_barrier",  (c) => {
    
     let name = c.pathParam("name");
     let faculty = c.pathParam("faculty");
     let code = c.pathParam("code");
     let budget_barrier = c.pathParam("budget_barrier");
     let paid_barrier = c.pathParam("paid_barrier");
     let target_barrier = c.pathParam("target_barrier");

    const collection = $app.dao().findCollectionByNameOrId("speciality")

    const record = new Record(collection, {
        "name": name,
        "faculty": faculty,
        "code": code,
        "budget_barrier": budget_barrier,
        "paid_barrier": paid_barrier,
        "target_barrier": target_barrier,

        "student_count": 0,
        "budget_count": 0,
        "paid_count": 0,
        "target_count": 0
    })

    $app.dao().saveRecord(record)
})

//Update
routerAdd("PATCH", "/applicant-api/speciality/update/:code/:budget_count/:paid_count/:target_count",  (c) => {
    
     let code = c.pathParam("code");
     let budget_count = c.pathParam("budget_count");
     let paid_count = c.pathParam("paid_count");
     let target_count = c.pathParam("target_count");
     let spec = null;

    spec = $app.dao().findFirstRecordByData(
        "speciality", "code", code
    )

    spec.set("budget_count", budget_count);
    spec.set("paid_count", paid_count);
    spec.set("target_count", target_count);
    
    spec.set("student_count", parseInt(target_count)  + parseInt(paid_count) + parseInt(budget_count));


   $app.dao().saveRecord(spec)
})

// DELETE
routerAdd("DELETE", "/applicant-api/speciality/delete/:code", (c) => {
    
    let code = c.pathParam("code");

    const record = $app.dao().findFirstRecordByData("speciality","code", code)

    $app.dao().deleteRecord(record)  
})

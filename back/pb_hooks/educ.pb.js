
//http://127.0.0.1:8090/api/

// GET BY ENROLLEE
routerAdd("GET", "/applicant-api/educ/getone/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    
    console.log(enrollee_id)

    const records = $app.dao().findFirstRecordByData(
        "educ_certificate", "enrollee_id", enrollee_id );
    
    console.log("PEDIK")

    return c.json(200, { records })
})

// GET ONE by subject
routerAdd("GET", "/applicant-api/educ/getone/:subject/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    let subject = c.pathParam("subject");
    
    console.log(enrollee_id)

    const records = $app.dao().findFirstRecordByFilter(
        "educ_certificate", "enrollee_id = '" + enrollee_id + "' && subject = '" + subject + "'",
        );
   
    return c.json(200, { records })
})

//Create
routerAdd("POST", "/applicant-api/educ/create/:score/:physics/:math/:chemistry/:english/:russian/:belarussian/:biology/:enrollee_id",  (c) => {
    
     let score = c.pathParam("score"); 
     let physics = c.pathParam("physics");
     let math = c.pathParam("math");
     let chemistry = c.pathParam("chemistry");
     let english = c.pathParam("english");
     let russian = c.pathParam("russian");
     let belarussian = c.pathParam("belarussian");
     let biology = c.pathParam("biology");
     let enrollee_id = c.pathParam("enrollee_id");

    const collection = $app.dao().findCollectionByNameOrId("educ_certificate")

    const record = new Record(collection, {
        "score": score,
        "physics": physics,
        "math": math,
        "chemistry": chemistry,
        "english": english,
        "russian": russian,
        "belarussian": belarussian,
        "biology": biology,
        "enrollee_id": enrollee_id
    })

    $app.dao().saveRecord(record)
})

//Update
routerAdd("PATCH", "/applicant-api/educ/update/:score/:physics/:math/:chemistry/:english/:russian/:belarussian/:biology/:enrollee_id",  (c) => {
    
    let score = c.pathParam("score"); 
    let physics = c.pathParam("physics");
    let math = c.pathParam("math");
    let chemistry = c.pathParam("chemistry");
    let english = c.pathParam("english");
    let russian = c.pathParam("russian");
    let belarussian = c.pathParam("belarussian");
    let biology = c.pathParam("biology");
    let enrollee_id = c.pathParam("enrollee_id");
    
    let educ = null;

    educ = $app.dao().findFirstRecordByData(
       "educ_certificate", "enrollee_id", enrollee_id
   )

   educ.set("score", score);
   educ.set("physics", physics);
   educ.set("math", math);
   educ.set("chemistry", chemistry);
   educ.set("english", english);
   educ.set("russian", russian);
   educ.set("belarussian", belarussian);
   educ.set("biology", biology);

  $app.dao().saveRecord(educ)
})
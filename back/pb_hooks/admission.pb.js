
//http://127.0.0.1:8090/api/


// GET ALL
routerAdd("GET", "/applicant-api/admission/getall", (c) => {

    
    console.log("records")

    const records = $app.dao().findRecordsByFilter(
        "admission_list",                                   // collection
        "speciality_id = 'u5zs1y55l6efa8a'",      // filter
        "enrollee_id",                                 // sort
        200,                                         // limit
        0);

    console.log("records")
    console.log(records)

    return c.json(200, {records} )
})

// GET ALL BY SPEC
routerAdd("GET", "/applicant-api/admission_list/getallbyspec/:speciality_id", (c) => {
    
    let speciality_id = c.pathParam("speciality_id");

    const records = $app.dao().findRecordsByFilter(
        "admission_list",                                   // collection
        "speciality_id = '" + speciality_id + "'",      // filter
        "enrollee_id",                                 // sort
        200,                                         // limit
        0);
   
    return c.json(200, { records })
})

// GET ONE
routerAdd("GET", "/applicant-api/admission_list/getone/:priority/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    let priority = parseInt(c.pathParam("priority"));
     
    console.log(enrollee_id)

    const records = $app.dao().findFirstRecordByFilter(
        "choice", "enrollee_id = '" + enrollee_id + "' && priority = '" + priority + "'",
        );
   
    return c.json(200, { records })
})

// DELETE
routerAdd("DELETE", "/applicant-api/admission_list/delete/:id", (c) => {
    
    let id = c.pathParam("id");

    const record = $app.dao().findRecordById("choice", id)

    $app.dao().deleteRecord(record)  
})


function getEnrolleeIDs(){

}
//CreateList
routerAdd("GET", "/applicant-api/admission_list/createlist",  (c) => {
    

    //const collection = $app.dao().findCollectionByNameOrId("admission_list")
    let code = 111222

    //get spec by code
    let spec = null;
    spec = $app.dao().findFirstRecordByData(
        "speciality", "code", code)

    //Get all enrolllees by first spec in choice list

    //get all enrollee ID-s on this speciality
    const priorChoices = $app.dao().findRecordsByFilter(
        "choice",                                   // collection
        "speciality_id = '" + spec.id + "' && priority = 1",      // filter
        "priority",                                 // sort
        50,                                         // limit
        0);

    //Get all enrolllees from ID-s
    let enrollee_id_list = []
    let enrollee_list = null

    console.log(priorChoices[0].priority + " AAAAAA")

    priorChoices.forEach((choice) => {
        console.log(choice.priority)
        enrollee_id_list.push(choice.id)
      });
      console.log("ID-s " + enrollee_id_list)

      enrollee_list = $app.dao().findRecordsByIds("enrollee", 
      enrollee_id_list)

      //console.log(Object.values(enrollee_list))
    // 

    return c.json(200, { priorChoices })
})


function createProtoSpecList(code){

    let enrollee_list = null;

    let spec = null;

    console.log(spec)

    spec = $app.dao().findFirstRecordByData(
        "speciality", "code", code)    

    //get all enrollee ID-s on this speciality
    console.log(spec.id)

    const records = $app.dao().findRecordsByFilter(
        "choice",                                   // collection
        "speciality_id = '" + spec.id + "' && priority = 1",      // filter
        "priority",                                 // sort
        50,                                         // limit
        0);

    console.log(records.data)
   
    return spec;

}

// try {
//     let getEnrolleeIDs = require('./func.js');
// }
// catch(exception){
//         console.log(exception.message)
//     return c.json(403, { "message": "" })
// }
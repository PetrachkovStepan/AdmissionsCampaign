
//http://127.0.0.1:8090/api/

// GET BY ENROLLEE
routerAdd("GET", "/applicant-api/passport/getone/:enrollee_id", (c) => {
    
    let enrollee_id = c.pathParam("enrollee_id");
    
    console.log(enrollee_id)

    const record = $app.dao().findFirstRecordByData(
        "passport", "enrollee_id", enrollee_id );
    

    return c.json(200,  {record} )
})

//Create
routerAdd("POST", "/applicant-api/passport/create/:fio_k/:fio_l/:birth_date/:given_date/:given_by_whom/:birth_place/:series/:sex/:id_num/:enrollee_id",  (c) => {
    
     let fio_k = c.pathParam("fio_k"); 
     let fio_l = c.pathParam("fio_l");
     let birth_date = c.pathParam("birth_date");
     let given_date = c.pathParam("given_date");
     let given_by_whom = c.pathParam("given_by_whom");
     let birth_place = c.pathParam("birth_place");
     let series = c.pathParam("series");
     let sex = c.pathParam("sex");
     let id_num = c.pathParam("id_num");
     let enrollee_id = c.pathParam("enrollee_id");

    const collection = $app.dao().findCollectionByNameOrId("passport")

    const record = new Record(collection, {
        "fio_k": fio_k,
        "fio_l": fio_l,
        "birth_date": birth_date,
        "given_date": given_date,
        "given_by_whom": given_by_whom,
        "birth_place": birth_place,
        "series": series,
        "sex": sex,
        "id_num": id_num,
        "enrollee_id": enrollee_id
    })

    $app.dao().saveRecord(record)
})

//Update
routerAdd("PATCH", "/applicant-api/passport/update/:fio_k/:fio_l/:birth_date/:given_date/:given_by_whom/:birth_place/:series/:sex/:id_num/:enrollee_id",  (c) => {
    
    let fio_k = c.pathParam("fio_k"); 
    let fio_l = c.pathParam("fio_l");
    let birth_date = c.pathParam("birth_date");
    let given_date = c.pathParam("given_date");
    let given_by_whom = c.pathParam("given_by_whom");
    let birth_place = c.pathParam("birth_place");
    let series = c.pathParam("series");
    let sex = c.pathParam("sex");
    let id_num = c.pathParam("id_num");
    let enrollee_id = c.pathParam("enrollee_id");

    let passp = null;
    
    passp = $app.dao().findFirstRecordByData(
       "passport", "enrollee_id", enrollee_id
   )

   passp.set("fio_k", fio_k);
   passp.set("fio_l", fio_l);
   passp.set("birth_date", birth_date);
   passp.set("given_date", given_date);
   passp.set("given_by_whom", given_by_whom);
   passp.set("birth_place", birth_place);
   passp.set("series", series);
   passp.set("sex", sex);
   passp.set("id_num", id_num);

  $app.dao().saveRecord(passp)
})
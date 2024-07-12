
//http://127.0.0.1:8090/api/

// GET ALL 
routerAdd("GET", "/applicant-api/university_employee/getall", (c) => {
    
    const records = $app.dao().findRecordsByFilter("university_employee");
    console.log(records)

    return c.json(200, { records })
})

// GET ONE BY PARAM
routerAdd("GET", "/applicant-api/university_employee/getoneby/:param/:currency", (c) => {
    
    let param = c.pathParam("param");
    let currency = c.pathParam("currency");
    let user = null;

    try {
    user = $app.dao().findFirstRecordByData(
        "university_employee", param, currency
    )
    } catch (exception) {
        console.log(exception.message)
        return c.json(403, { "message": "UserNotFoundException" })
    }    
    return c.json(200, { user })
})

//Login // ---------AAAAAAAAAA---------
routerAdd("GET", "/applicant-api/university_employee/login/:email/:password", (c) => {
    
    let email = c.pathParam("email");
    let password = c.pathParam("password");
    let user = null;

    try {
    user = $app.dao().findFirstRecordByData(
        "university_employee", "email", email
    )
    } catch (exception) {
        console.log(exception.message)
        return c.json(405, { "message": "UserNotFoundException" })
    }    

    if(user.getString("user_password") != password)
        return c.json(406, {"message": "WrongPasswordException"})
    
    return c.json(200, { user })
})

//Register university_employee
routerAdd("POST", "/applicant-api/university_employee/register/:username/:email/:password/:role/:phone/:department/:info",  (c) => {
    
     let username = c.pathParam("username");
     let email = c.pathParam("email");
     let password = c.pathParam("password");
     let role = c.pathParam("role");
     let phone = c.pathParam("phone");
     let department = c.pathParam("department");
     let info = c.pathParam("info");

    const collection = $app.dao().findCollectionByNameOrId("university_employee")

    const record = new Record(collection, {
        "username": username,
        "email": email,
        "user_password": password,
        "role": role,
        "phone": phone,
        "department": department,
        "info": info
    })

    $app.dao().saveRecord(record)
})

//Update
routerAdd("PATCH", "/applicant-api/university_employee/updateuser/:name/:email/:password/:role/:phone/:department/:info",  (c) => {
    
     let role = c.pathParam("role");
     let phone = c.pathParam("phone");
     let department = c.pathParam("department");
     let info = c.pathParam("info");

     let email = c.pathParam("email");
     
     let name = c.pathParam("name");
     let password = c.pathParam("password");

     let employee = null;

     employee = $app.dao().findFirstRecordByData( "university_employee", "email", email)
    
    console.log(role)
    let role1 = false
    if(role==="Отдел кадров"){
        role1 = true
    }
    console.log(role1)

    employee.set("role",role1 );
    employee.set("phone", phone);
    employee.set("department", department);
    employee.set("info", info);

    employee.set("username", name);
    employee.set("user_password", password);

   $app.dao().saveRecord(employee)
})

// DELETE
routerAdd("DELETE", "/applicant-api/university_employee/delete/:email", (c) => {
    
    let email = c.pathParam("email");

    const record = $app.dao().findFirstRecordByData("university_employee","email", email)

    $app.dao().deleteRecord(record)  
})

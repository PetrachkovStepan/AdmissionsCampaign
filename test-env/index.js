import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/applicant-api');

//USER--USER--USER--USER--USER--USER--USER--USER--

//LOGIN

// const a = pb.send("/enrollee/login/bbb@gmail.com/222222", {

// });

// a.then((data) => console.log(data))



// REGISTER

// const a = pb.send("/enrollee/register/aaa/aaa@gmail.com/222222/budget", {
//     method: "POST"
// });
// a.then((data) => console.log(data))



// // GET ALL
// const a = pb.send("/enrollee/getall", { 

// });
// a.then((data) => console.log(data))


// GET ONE
// const a = pb.send("/enrollee/getoneby/email/ccc@gmail.com", { 

// });
// a.then((data) => console.log(data))



// UPDATE

// const a = pb.send("/enrollee/updateuser/ccc@gmail.com/paid/3/200", {
//     method: "PATCH"
// });
// a.then((data) => console.log(data))


//SPECIALITY--SPECIALITY--SPECIALITY--SPECIALITY--SPECIALITY--SPECIALITY--

// CREATE

// const a = pb.send("/speciality/create/spec5/faculty2/111333/15/30/5", {
//     method: "POST"
// });
// a.then((data) => console.log(data))

// UPDATE

// const a = pb.send("/speciality/update/111333/5/7/3", {
//     method: "PATCH"
// });
// a.then((data) => console.log(data))

// GET ONE
// const a = pb.send("/speciality/getoneby/code/111333", { 

// });
// a.then((data) => console.log(data))

// GET BY FACULTY 
// const a = pb.send("/speciality/getallbyfaculty/faculty2", { 

// });
// a.then((data) => console.log(data))


//CT--CT--CT--CT--CT--CT--CT--CT--CT--CT--

// CREATE 
// const a = pb.send("/ct/create/80/math/b1a48pdvwfmekqr", { 
//     method: "POST"
// });
// a.then((data) => console.log(data))


// GET BY ENROLLEE 
// const a = pb.send("/ct/getallbyenrollee/b7k6o74vyf6a86s", { 

// });
// a.then((data) => console.log(data))

// GET ONE
// const a = pb.send("/ct/getone/math/b1a48pdvwfmekqr", { 

// });
// a.then((data) => console.log(data))

// DELETE
// const a = pb.send("/ct/delete/20ghg1w2c613y8l", { 
//     method: "DELETE"
// });
// a.then((data) => console.log(data))

//BENEFIT--BENEFIT--BENEFIT--BENEFIT--BENEFIT--BENEFIT--BENEFIT--


// CREATE 
// const a = pb.send("/benefit/createdenefit/a/a/xiyv73ml1x2u5le", { 
//     method: "POST"
// });
// a.then((data) => console.log(data))


// // GET BY ENROLLEE 
// const a = pb.send("/benefit/getallbyenrollee/b7k6o74vyf6a86s", { 

// });
// a.then((data) => console.log(data))

// GET ONE
// const a = pb.send("/ct/getone/math/b1a48pdvwfmekqr", { 

// });
// a.then((data) => console.log(data))

// // DELETE
// const a = pb.send("/benefit/delete/v2ayd4vxn641lpw", { 
//     method: "DELETE"
// });
// a.then((data) => console.log(data))


//EDUC SERC--EDUC SERC--EDUC SERC--EDUC SERC--EDUC SERC--EDUC SERC--EDUC SERC--


// CREATE
// const a = pb.send("/educ/create/76/9/5/5/5/5/5/5/tt3go93hqg1m4yz", { 
//     method: "POST"
// });
// a.then((data) => console.log(data))


// GET BY ENROLLEE 

// const a = pb.send("/educ/getone/tt3go93hqg1m4yz", { 

// });
// a.then((data) => console.log(data))


// GET ONE
// const a = pb.send("/educ/getone/math/b1a48pdvwfmekqr", { 

// });
// a.then((data) => console.log(data))

// UPDATE
// const a = pb.send("/educ/update/60/6/6/6/6/5/9/5/tt3go93hqg1m4yz", { 
//     method: "PATCH"
// });
// a.then((data) => console.log(data))

//PASSPORT--PASSPORT--PASSPORT--PASSPORT--PASSPORT--PASSPORT--

// CREATE
// const a = pb.send("/passport/create/Петрачков Степан Леонидович/Petrachkou Stsiapan Leonidovich/2004-01-01/2017-01-01/РОВД Ааааааа/Адрес Адрес Адрес/КВ/m/1111111/tt3go93hqg1m4yz", { 
//     method: "POST"
// });
// a.then((data) => console.log(data))


// // GET BY ENROLLEE 

// const a = pb.send("/passport/getone/xiyv73ml1x2u5le", { 

// });
// a.then((data) => console.log(data))

// UPDATE
// const a = pb.send("/passport/update/Петрачков Василий Леонидович/Petrachkou Stsiapan Leonidovich/2004-01-01/2017-01-01/РОВД Ааааааа/Адрес Адрес Адрес/КВ/m/1111111/tt3go93hqg1m4yz", { 
//     method: "PATCH"
// });
// a.then((data) => console.log(data))


//EMPLOYEE--EMPLOYEE--EMPLOYEE--EMPLOYEE--EMPLOYEE--EMPLOYEE--EMPLOYEE--


//LOGIN

// const a = pb.send("/enrollee/login/bbb@gmail.com/222222", {

// });

// a.then((data) => console.log(data))



// REGISTER

// const a = pb.send("/university_employee/register/Kee/kee@gmail.com/444444/true/446666666/FKP/Работал 3 дня за хлэб", {
//     method: "POST"
// });
// a.then((data) => console.log(data))

// // UPDATE
// const a = pb.send("/university_employee/updateuser/name/kee@gmail.com/password/role/phone/department/info", { 
//     method: "PATCH"
// });
// a.then((data) => console.log(data))


// // GET ALL
// const a = pb.send("collections/university_employee/records", { 

// });
// a.then((data) => console.log(data))


// // GET ONE
// const a = pb.send("/enrollee/getoneby/email/ccc@gmail.com", { 

// });
// a.then((data) => console.log(data))



// UPDATE

// const a = pb.send("/university_employee/updateuser/sss/kee@gmail.com/333333/true/338888888/FRE/xxx", {
//     method: "PATCH"
// });
// a.then((data) => console.log(data))


//CHOICE--CHOICE--CHOICE--CHOICE--CHOICE--CHOICE--CHOICE--CHOICE--CHOICE--

// CREATE 
// const a = pb.send("/choice/create/2/u5zs1y55l6efa8a/xiyv73ml1x2u5le", { 
//     method: "POST"
// });
// a.then((data) => console.log(data))


// GET BY ENROLLEE 
// const a = pb.send("/choice/getallbyenrollee/xiyv73ml1x2u5le", { 

// });
// a.then((data) => console.log(data))

// GET ONE
// const a = pb.send("/choice/getone/math/2/xiyv73ml1x2u5le", { 

// });
// a.then((data) => console.log(data))

// DELETE
// const a = pb.send("/choice/delete/20ghg1w2c613y8l", { 
//     method: "DELETE"
// });
// a.then((data) => console.log(data))

//LIST!!!!!!LIST!!!!!!LIST!!!!!!LIST!!!!!!LIST!!!!!!LIST!!!!!!LIST!!!!!!LIST!!!!!!

// // CREATE List
// const a = pb.send("/admission_list/createlist", { 
//     method: "GET"
// });
// a.then((data) => console.log(data))


// GET ALL BY SPEC
// const a = pb.send("/admission_list/getallbyspec/u5zs1y55l6efa8a", { 

// });
// a.then((data) => console.log(data))

// GET ALL
// const a = pb.send("/admission/getall", { 

// });
// a.then((data) => console.log(data))

// GET ONE
// const a = pb.send("/choice/getone/math/2/xiyv73ml1x2u5le", { 

// });
// a.then((data) => console.log(data))

// DELETE
// const a = pb.send("/choice/delete/20ghg1w2c613y8l", { 
//     method: "DELETE"
// });
// a.then((data) => console.log(data))
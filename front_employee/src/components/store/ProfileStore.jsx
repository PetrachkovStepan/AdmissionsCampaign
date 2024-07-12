import {makeAutoObservable} from "mobx"

export default class ProfileStore{
    constructor(){
        this._id = 301
        this._name = "Aaaaa Aaaaa Aaaaa"
        this._email = "aaa@gmail.com"
        this._password = "qwerty"
        this._role = true
        this._phoneNum = "+375 44 22334734"
        this._department = "ФКП"
        this._info = "Информация информация информация информация информация"
        makeAutoObservable(this)
    }
    setId(id) {
        this._id = id
    }
    get id() {
        return this._id
    }
    setName(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    
    setEmail(email) {
        this._email = email
    }
    get email() {
        return this._email
    }
    
    setPassword(password) {
        this._password = password
    }
    get password() {
        return this._password
    }
    
    setRole(role) {
        this._role = role
    }
    get role() {
        return this._role
    }
    
    setPhoneNum(phoneNum) {
        this._phoneNum = phoneNum
    }
    get phoneNum() {
        return this._phoneNum
    }
    
    setDepartment(department) {
        this._department = department
    }
    get department() {
        return this._department
    }
    
    setInfo(info) {
        this._info = info
    }
    get info() {
        return this._info
    }

}
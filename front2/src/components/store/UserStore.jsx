import {makeAutoObservable} from "mobx"

export default class UserStore{
    constructor(){
        this._id = "b7k6o74vyf6a86s"
        this._name = "ccc"
        this._email = "ccc@gmail.com"
        this._password = "444444"

        this._education_type = ""
        this._speciality_count = 0
        this._score = 0
        this._applied = false
        makeAutoObservable(this)
    }
    setId(id) {
        this._id = id
    }
    get id() {
        return this._id
    }
    setApplied(id) {
        this._applied = id
    }
    get applied() {
        return this._applied
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
    
    setEducation_type(role) {
        this._education_type = role
    }
    get education_type() {
        return this._education_type
    }
    
    setSpeciality_count(department) {
        this._speciality_count = department
    }
    get speciality_count() {
        return this._speciality_count
    }
    
    setScore(info) {
        this._score = info
    }
    get score() {
        return this._score
    }

}
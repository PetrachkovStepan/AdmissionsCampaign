import {makeAutoObservable} from "mobx"

export default class PassportStore{
    constructor(){
        this._id = ""
        this._fio_k = ""
        this._fio_l = ""
        this._sex = ""
        this._family = ""
        this._birth_date = "2001-01-01"
        this._birth_place = ""
        this._given_date = "2001-01-01"
        this._given_by_whom = ""
        this._series = ""
        this._num = ""
        this._id_num = ""
        makeAutoObservable(this)
    }

    
    setId(id) {
        this._id = id
    }
    get id() {
        return this._id
    }

    
    setSex(id) {
        this._sex = id
    }
    get sex() {
        return this._sex
    }

    
    setFamily(id) {
        this._family = id
    }
    get family() {
        return this._family
    }

    
    setFioK(fio_k) {
        this._fio_k = fio_k
    }
    get fio_k() {
        return this._fio_k
    }

    
    setFioL(fio_l) {
        this._fio_l = fio_l
    }
    get fio_l() {
        return this._fio_l
    }

    
    setBirth_date(id) {
        this._birth_date = id
    }
    get birth_date() {
        return this._birth_date
    }

    
    setBirth_place(id) {
        this._birth_place = id
    }
    get birth_place() {
        return this._birth_place
    }

    
    setGiven_date(id) {
        this._given_date = id
    }
    get given_date() {
        return this._given_date
    }

    
    setGiven_by_whom(id) {
        this._given_by_whom = id
    }
    get given_by_whom() {
        return this._given_by_whom
    }

    
    setSeries(id) {
        this._series = id
    }
    get series() {
        return this._series
    }

    
    setId_num(id) {
        this._id_num = id
    }
    get id_num() {
        return this._id_num
    }

    
    setNum(id) {
        this._num = id
    }
    get num() {
        return this._num
    }

}
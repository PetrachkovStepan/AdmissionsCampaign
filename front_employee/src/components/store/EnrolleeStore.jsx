import {makeAutoObservable} from "mobx"

export default class EnrolleeStore{
    constructor(){
        this._id = "xiyv73ml1x2u5le"
        makeAutoObservable(this)
    }

    
    setId(id) {
        this._id = id
    }
    get id() {
        return this._id
    }

}
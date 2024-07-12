
import { makeAutoObservable } from "mobx"


export default class EducStore {
    constructor() {
        this._id = "xiyv73ml1x2u5le";
        this._score = 98;
        this._enrollee_id = "xiyv73ml1x2u5le";
        this._school_type = "Средняя школа";
        this._school_name = "СШ 41";
        this._educ_date = "2001-01-01";
        this._doc_num = "0000000";
        this._doc = "Аттестат";
        this._foreign_language = "English";
        makeAutoObservable(this);
    }

    setId(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    setDoc(id) {
        this._doc = id;
    }
    get doc() {
        return this._doc;
    }

    setScore(id) {
        this._score = id;
    }
    get score() {
        return this._score;
    }

    setEnrollee_id(id) {
        this._enrollee_id = id;
    }
    get enrollee_id() {
        return this._enrollee_id;
    }

    setSchool_type(id) {
        this._school_type = id;
    }
    get school_type() {
        return this._school_type;
    }

    setSchool_name(id) {
        this._school_name = id;
    }
    get school_name() {
        return this._school_name;
    }

    setEduc_date(id) {
        this._educ_date = id;
    }
    get educ_date() {
        return this._educ_date;
    }

    setDoc_num(id) {
        this._doc_num = id;
    }
    get doc_num() {
        return this._doc_num;
    }

    setForeign_language(id) {
        this._foreign_language = id;
    }
    get foreign_language() {
        return this._foreign_language;
    }


}

import {makeAutoObservable} from "mobx"
import { getFilmInfo, getFilms} from "../http/filmAPI";
import {setFilms} from "../pages/FilmSearchPage"

import { useContext } from "react";
import { Context } from "../..";
import {observer} from "mobx-react-lite";

export const getSortedRating = async() =>{
    const response = getFilms(1)
    console.log(response)
    return response;
}
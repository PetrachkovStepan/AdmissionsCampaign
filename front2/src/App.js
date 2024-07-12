import './App.css';
import Header from './components/PageTemp';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./components/..";
import {observer} from "mobx-react-lite";
import { check, logIn } from './components/http/userAPI';

const App = observer( () => {
  const{user} = useContext(Context)
  const[loading, setLoading] = useState(true)
  const navigate = useNavigate();


  return (
    <div>
        <div className=' flex'> 
          <Header className></Header>
        </div>
    </div>
  );
});

export default App;

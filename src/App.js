
import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState , useEffect } from 'react';
import AddTodo from "./MyComponents/AddTodo";
import { cleanup } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let inttodo
  if (localStorage.getItem("to")==null) {
    inttodo = []
  }
  else
    inttodo = JSON.parse(localStorage.getItem("to"))
  
  localStorage.getItem("to")
  
  const onDelete = (bot) => {
console.log("I am on delete" , bot )

settodosss(todosss.filter((e)=>{
return e!==bot;
}));




  }
  const addTodo = (title , desc)=>{
    let sno
    if(todosss.length==0) sno=1;
    else
     sno = todosss[todosss.length-1].sno+1;
    const mytodo ={
      sno: sno,
      title : title,
      desc : desc
      
    }
    settodosss([...todosss,mytodo])
    
    console.log("I am adding this todo",mytodo)
    
    
  }
  const [todosss, settodosss] = useState(inttodo)
  useEffect(()=>{
    localStorage.setItem("to",JSON.stringify(todosss))
   
  }, [todosss])
  return (
    <>
    <Router>
    <Header title="MyTodosList" SearchBar={true}/>
    
    
    <AddTodo addTodo={addTodo}/>
    <Todos tod={todosss} k={onDelete}/>
         
    
    
    <Footer/>
    </Router>

    </>
  );
}

export default App;

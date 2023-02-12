"use client"

import { useState } from "react";

export default function AddNewTodo() {
    const [TodoList,setTodoList]=useState<string[]>([]);
    const [AddTodo,setAddTodo]=useState<string>('')
 
    const handleSubmit=(e:{preventDefault:()=>void})=>{
        e.preventDefault();
        setTodoList([...TodoList,AddTodo]);
        setAddTodo('');
    }

    const handleChange=(e:{target:{value:React.SetStateAction<string>;};})=>{
        setAddTodo(e.target.value);
    }

    const handleDelete=(index:number)=>{
        const newTodo=[...TodoList];
        newTodo.splice(index,1);
        setTodoList(newTodo);
    }

    return (
        <div >
            <br/><h5 style={{color:"purple" ,fontSize:"20px"}}>Enter Todos</h5><br/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={AddTodo} onChange={handleChange} required/><br/>
                <div >
                    <button type="submit" style={{background:"red", padding:"0px 55px 0px 55px"}}>Add todo</button>
                </div>
            </form>
            <ul style={{listStyle:"none"}}>
                {TodoList.map((todo,index)=>(
                    <>
                        <li key={index} style={{ color: "white" }}>
                        <input type="checkbox" />{todo}&nbsp;&nbsp;<button type="button" onClick={()=>handleDelete(index)}>Delete</button></li><br/> 
                    </>
                ))}
            </ul>
        </div>
    );
}
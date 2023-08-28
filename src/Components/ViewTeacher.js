import React from "react";
import BaseApp from "../Base/Base";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AppState } from "../context/AppProvider";

export function ViewTeacher(){
    const {teacher}=AppState();

    const {id} = useParams();
    const persons = teacher[id]
    
    return(
        <BaseApp>
         <div className="d-flex flex-wrap justify-content-center">
            
                <div className="card width m-4">
                    <div className="card-header">
                        <h2>{persons.name}</h2>
                    </div>
                    <div className="card-body">
                        <p>Subject : {persons.subject}</p>
                        <p>Exp : {persons.experience} Years</p>
                        <p>Salary : {persons.salary}</p>
                    </div>
                   
                </div>
         
            </div>
        
        
        </BaseApp>
    )
}
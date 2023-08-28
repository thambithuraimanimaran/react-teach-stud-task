import React from "react";
import BaseApp from "../Base/Base";
import {useParams} from "react-router-dom";
import { AppState } from "../context/AppProvider";

export function ViewStudent(){
    const{usestudent}=AppState();
    const {id} = useParams();
    const person = usestudent[id]
    console.log(person)
    
    return(
        <BaseApp>
            <div className="d-flex flex-wrap justify-content-center">   
                <div className="card width m-4">
                    <div className="card-header">
                        <h2>{person.name}</h2>
                    </div>
                    <div className="card-body">
                    <p>Group : {person.group}</p>
                            <p>Result : {person.result}</p>
                            <p>Percentage : {person.percentage}%</p>
                    </div>
                </div>
            </div>  
        
        
        </BaseApp>
    )
}
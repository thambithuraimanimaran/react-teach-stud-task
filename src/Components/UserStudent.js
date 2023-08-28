import React from "react";

import BaseApp from "../Base/Base";

import {useHistory} from "react-router-dom";
import { AppState } from "../context/AppProvider";

export function UserStudent(){
    const{usestudent,setUsestudent}=AppState();
    const history = useHistory();
    

    const deleteStudent = (ele)=>{
        const newdelete = usestudent.filter((stu)=>stu.roll!==ele);
        setUsestudent(newdelete);
    }
    return(
       <BaseApp>
       
        <div>
            <div>
                <h2 className="text-dark">Students Details</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
            { UserStudent && (
            usestudent?.map((stud,idx)=>(
                <div key={idx} className="card width m-4">
                    <div className="card-header">
                        <h2>{stud.name}</h2>
                    </div>
                    <div className="card-body">
                    <p>Group : {stud.group}</p>
                            <p>Result : {stud.result}</p>
                            <p>Percentage : {stud.percentage}%</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary m-1"
                        onClick={()=>history.push(`/editstud/${stud.roll}`)}>Edit</button>
                        <button className="btn btn-warning m-1"
                        onClick={()=>history.push(`/viewstud/${idx}`)}>View</button>
                        <button className="btn btn-danger m-1"
                        onClick={()=>{deleteStudent(stud.roll)}}>Delete</button>
                    </div>
                </div>
            )))}
            </div>
        </div>
       </BaseApp>
    )
}
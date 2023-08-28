import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { TeacherData } from "../Data/TeacherData";
import { useContext } from "react";
import { StudentData } from "../Data/StudentData";


// step:1 create context
const AppContext = createContext(null);

function AppProvider({children}){
    // step:2 create provider & user
    const [teacher,setTeacher]=useState(TeacherData);
    const [usestudent,setUsestudent]=useState(StudentData);
    return(
        <AppContext.Provider
        value= {{teacher,
                setTeacher,
                usestudent,
                setUsestudent
                }}>
            {children}
        </AppContext.Provider>
    )
}
export const AppState = ()=>{
    return useContext(AppContext);
}
export default AppProvider
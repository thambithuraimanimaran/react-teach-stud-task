
import './App.css';

import { UserStudent } from './Components/UserStudent';
import { StudentData } from './Data/StudentData';
import { useState } from 'react';
import { AddStudent } from './Components/AddStudent';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route } from "react-router-dom";
import { ViewStudent } from './Components/ViewStudent';
import { EditStudent } from './Components/EditStudent';
import { UserTeacher } from './Components/UserTeacher';
import { TeacherData } from './Data/TeacherData';
import { AddTeacher } from './Components/AddTeacher';
import { ViewTeacher } from './Components/ViewTeacher';
import { EditTeacher } from './Components/EditTeacher';
import { HomePage } from './Home/Home';


function App() {
  const [usestudent, setUsestudent] = useState(StudentData);
  const [teacher,setTeacher]=useState(TeacherData);
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/student">
          <UserStudent usestudent={usestudent} setUsestudent={setUsestudent} />
        </Route>
        <Route path="/addstudent">
          <AddStudent
            usestudent={usestudent}
            setUsestudent={setUsestudent} />
        </Route>
        <Route path="/viewstud/:id">
          <ViewStudent
            usestudent={usestudent} />
        </Route>
        <Route path="/editstud/:id">
          <EditStudent
            usestudent={usestudent}
            setUsestudent={setUsestudent} />
        </Route>
        <Route path="/teacher">
        <UserTeacher teacher={teacher} setTeacher={setTeacher}/>
        </Route>
        <Route path="/addteacher">
        <AddTeacher teacher={teacher} setTeacher={setTeacher}/>
        </Route>
        <Route path="/viewteacher/:id">
          <ViewTeacher teacher={teacher}/>
        </Route>
        <Route path="/editteacher/:id">
          <EditTeacher teacher={teacher} setTeacher={setTeacher}/>
        </Route>




      </Switch>



    </div>
  );
}

export default App;

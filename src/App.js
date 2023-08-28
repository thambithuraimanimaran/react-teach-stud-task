
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
 
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/student">
          <UserStudent/>
        </Route>
        <Route path="/addstudent">
          <AddStudent/>
        </Route>
        <Route path="/viewstud/:id">
          <ViewStudent/>
        </Route>
        <Route path="/editstud/:id">
          <EditStudent/>
        </Route>
        <Route path="/teacher">
        <UserTeacher/>
        </Route>
        <Route path="/addteacher">
        <AddTeacher/>
        </Route>
        <Route path="/viewteacher/:id">
          <ViewTeacher/>
        </Route>
        <Route path="/editteacher/:id">
          <EditTeacher/>
        </Route>




      </Switch>



    </div>
  );
}

export default App;

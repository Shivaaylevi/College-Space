import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Notice from './Components/Notice';
import TimeTable from './Components/TimeTable';
import Home from './Components/Home';
import  Feedback from './Components/Feedback';
import Placement from './Components/Placement';
import FirstYear from './Components/FirstYear';
import SecondYear from './Components/SecondYear';
import ThirdYear from './Components/ThirdYear';
import FourthYear from './Components/FourthYear';
import AppliedPhyscis from './Components/FirstYear/AppliedPhysics';
import WebDev from './Components/FirstYear/WebDev';
import Cpi from './Components/FirstYear/Cpi';
import Dsa from './Components/FirstYear/Dsa';
import Maths from './Components/FirstYear/Maths';
import Oops from './Components/FirstYear/Oops';
import Cplus from './Components/FirstYear/Cplus';
import ComputerNetwork from './Components/SecondYear/ComputerNetwork';
import OperatingSystem from './Components/SecondYear/OperatingSystem';
import Dbms from './Components/SecondYear/Dbms';
import AdvanceJava from './Components/SecondYear/AdvanceJava';
import CoreJava from './Components/SecondYear/CoreJava';
import DataComm from './Components/SecondYear/DataComm';
import WebDev2 from './Components/SecondYear/WebDev2';
import Cgmm from "./Components/Thirdyear/Cgmm"
import CloudComputing from './Components/Thirdyear/CloudComputing';
import Ai from "./Components/Thirdyear/Ai";
import Python from './Components/Thirdyear/Python';
import Iot from './Components/Thirdyear/Iot';
import Toc from './Components/Thirdyear/Toc';
import DataScience from './Components/Thirdyear/DataScience';
import CyberSecurity from './Components/Thirdyear/CyberSecurity';
function App() {
  return (
    <Router>
      <Sidebar/>
        <Routes>
        <Route path='/' element={<Home/>}/>   
        <Route path='/firstYear' element={<FirstYear/>}></Route>
        <Route path='/secondYear' element={<SecondYear/>}/>   
        <Route path='/thirdYear' element={<ThirdYear/>}/>   
        <Route path='/fourthYear' element={<FourthYear/>}/>   
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/timetable' element={<TimeTable/>}/>
        <Route path='/events' element={<Feedback/>}/>
        <Route path='/placement' element={<Placement/>}/>
        <Route path='/appliedPhysics' element={<AppliedPhyscis/>}/>
        <Route path='/webDevlopment' element={<WebDev/>}/>
        <Route path='/cpi' element={<Cpi/>}/>
        <Route path='/dsa' element={<Dsa/>}/>
        <Route path='/maths' element={<Maths/>}/>
        <Route path='/oops' element={<Oops/>}/>
        <Route path='/c++' element={<Cplus/>}/>
        <Route path="/computerNetwork" element={<ComputerNetwork/>}/>
        <Route path="/opeartingSystem" element={<OperatingSystem/>}/>
        <Route path="/dbms" element={<Dbms/>}/>
        <Route path="/advanceJava" element={<AdvanceJava/>}/>
        <Route path="/coreJava" element={<CoreJava/>}/>
        <Route path="/dataComm" element={<DataComm/>}/>
        <Route path="/html" element={<WebDev2/>}/>
        <Route path="/cgmm" element={<Cgmm/>}/>
        <Route path="/cloudComputing" element={<CloudComputing/>}/>
        <Route path="/ai" element={<Ai/>}/>
        <Route path="/iot" element={<Iot/>}/>
        <Route path="/python" element={<Python/>}/>
        <Route path="/toc" element={<Toc/>}/>
        <Route path="/dataScience" element={<DataScience/>}/>
        <Route path="/cyberSecurity" element={<CyberSecurity/>}/>

        </Routes>
    </Router>
  );
}
export default App;
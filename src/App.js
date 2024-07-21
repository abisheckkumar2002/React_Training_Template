


import './App.css'
import StudentIndex from "../src/pages/Index/index.js"
import StudentAdd from "../src/pages/Add/add.js"
import StudentEdit from "../src/pages/Edit/edit.js"
import Header from './componets/Header/Header.js'
import Footer from './componets/Footer/Footer.js'

function App() {


  
  return (
    <div>
 
 <Header/>
    <StudentIndex/>
    <StudentAdd/>
    <StudentEdit/>

    <Footer/>

    </div>
  );
}

export default App;

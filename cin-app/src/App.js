import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfilPhoto from './Profil/ProfilPhoto';
import FullName from './Profil/FullName'
import Adress from './Profil/Adress'

function App() {
  return (
    <div className="App" >
    <ProfilPhoto/>

<FullName/>
<Adress/>


    </div>
                    
  );
}

export default App;

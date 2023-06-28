// App.js
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './NavBar/Main';
import { InPatient } from './Modules/InPatient/InPatient';
import { Patient } from './Modules/Patient/Patient';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main />} />
        <Route element={<Main />}>
            <Route path="/patient" element={<Patient />} />
            <Route path="/inpatient" element={<InPatient />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

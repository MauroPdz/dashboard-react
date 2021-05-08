import React from 'react';
import './assets/css/app.css';
import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content-wrapper/ContentWrapper'

function App(){
  return (
    <div id="wrapper">
      
     <Sidebar />
     <ContentWrapper />


    </div>
  )

}
export default App;

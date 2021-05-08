import React from 'react';
import TopBar from './TopBar'
import ContainerBody from './content-body/ContainerBody'
import Footer from './Footer'


function ContentWrapper(){
  return (
    // <!-- Content Wrapper -->
    <div id="content-wrapper" className="d-flex flex-column">
      
      {/* <!-- Main Content --> */}
      <div id="content">
        <TopBar />
        <ContainerBody />
      </div>
        <Footer />
    </div>
  )

}

export default ContentWrapper;
import React from 'react';
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import TableMovies from './TableMovies'
import Footer from './Footer'


function ContentWrapper(){
  return (
    // <!-- Content Wrapper -->
    <div id="content-wrapper" className="d-flex flex-column">

      {/* <!-- Main Content --> */}
      <div id="content">

        <TopBar />
        <ContentRowTop />

      </div>
      {/* <!-- End of MainContent --> */}

      {/* Table */}

        {/* <TableMovies /> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}

    {/*   <!-- End of Content Wrapper --> */}
  
    </div>
    //  <!-- End of Page Wrapper -->
  )

}

export default ContentWrapper;
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // here we check to see what the value of currentPage is and then we return the corresponding componenet to render
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Projects') {
            return <Projects />;
          }
          return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Header/>
            {/* passing the current page from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {/* next we call the renderPage methopde which will return a component */}
            {renderPage()}
            <Footer/>
        </div>
    );
}
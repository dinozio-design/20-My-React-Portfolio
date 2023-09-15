import React, {useState} from 'react';


export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Home');

    // here we check to see what the value of currentPage is and then we return the corresponding componenet to render
const renderPage = ()=>{
    if (currentPage === 'Home') {
        return <Home />;
    }
}




    return (
        <div>
            {/* passing the current page from state and the function to update it */}
            <NavTabs currentPage = {currentPage} handlePageChange = {handlePageChange}/>
            {/* next we call the renderPage methopde which will return a component */}
            {renderPage()}
        </div>
    )
}
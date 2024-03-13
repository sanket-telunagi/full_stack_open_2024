import React from "react";

/**
 * 
 * This components gives the courseName 
 * from the course object from main App.jsx
 */

const Header = ({courseName}) => {
    return (
        <h1>
            {courseName}
        </h1>
    )
}
export default Header;
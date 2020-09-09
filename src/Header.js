import React from 'react';

function Header(props) {
    console.log(props)
    return (
    <div className = "Header_div" >
       <h1 className = "Header_title" >{props.titles}</h1>
     </div>
 )
}


export default Header;





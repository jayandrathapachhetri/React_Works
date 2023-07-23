// import React from 'react'


// function Footer(){ 
//     let footerStyle = {
//         position: "relative",
//         top: "36vh",
//         width: "100%",
//     }
    
//     return (
//         <footer className="bg-dark text-light py-3" style={footerStyle} > 
//             <p className="text-center text-height-sm">
//             Copyright &copy; MyTodosList.com
//             </p>
//         </footer>
//     )
// }

// export default Footer;

import React from 'react';

function Footer() {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    padding: "5px",
    textAlign: "center",
    // marginTop: "20px",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; MyTodosList.com</p>
    </footer>
  );
}

export default Footer;





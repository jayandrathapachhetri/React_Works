import React from 'react'


function Footer(){ 
    let footerStyle = {
        position: "absolute",
        // top: "100vh",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center text-height-sm">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

export default Footer;






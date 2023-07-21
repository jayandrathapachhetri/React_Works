import React from 'react'


function Footer(){ 
    let footerStyle = {
        position: "absolute",
        top: "90vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

export default Footer;






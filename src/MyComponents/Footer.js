import React from 'react';

export default function Footer(){
    let footerStyle = {
        textAlign: "center",
        backgroundColor: "rgba(76, 175, 80, 0.9)",
        paddingTop: "3px",
        height: "2em",
        width: "100vw",
        color: "white",
        position: "absolute",
        bottom: "0"
    }
    return(
        <footer style = {footerStyle}>
            <p>Copyright &copy; Chore Chore!.com</p>
        </footer>
    )
}
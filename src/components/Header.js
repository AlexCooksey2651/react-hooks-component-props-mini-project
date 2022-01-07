import React from "react";

// want name of blog, passed as a prop

function Header({ name }) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;
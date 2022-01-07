import React from "react";


// return aside tag with following inside:
// img element, with src set to "image" passed as a prop
// img placeholder has default value
// img has alt attribute already assigned to blog logo
function About({ 
    image="https://via.placeholder.com/215",
    about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;

import React from "react";
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    const {id, name, parts} = course;
    // console.log(id, name, parts);
    return (
        <div>
            <Header courseName={name}></Header>
            <Content 
                parts = {parts}
            />
            <Total parts={parts}/>
        </div>
    )
}

export default Course ;
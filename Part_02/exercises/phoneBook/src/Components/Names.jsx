import React from "react";

const Names = ({data}) => {
    return (
        <li >{data.name} {(data.number)}</li>
    )
}

export default Names;
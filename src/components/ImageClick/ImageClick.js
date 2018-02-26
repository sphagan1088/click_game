import React from "react";
import "./ImageClick.css";

const ImageClick = props => (
    <div
        role="img"
        aria-label="image click"
        onClick={() => props.handleClick(props.id)}
        style={{backgroundImage: `url("${props.image}")`}}
        className={`click-item${props.shake ? " shake" : ""}`}
        />
);

export default ImageClick;

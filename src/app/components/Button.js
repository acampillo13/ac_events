import React from "react";

export default function Button ({onClick, content}) {
    return (
        <button className="btn" onClick={onClick}>
            {content}
        </button>
    );
}
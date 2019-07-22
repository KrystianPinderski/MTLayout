import React from 'react'
import './TitleHeader.css'
export default function TitleHeader(props) {
    return (
        <div className={props.zIndex ? "TitleHeader-Container zIndex" : "TitleHeader-Container"}>
            <p className={
                props.id === 1 || props.id === 2 ? "TitleHeaderCrossed"
                    : "TitleHeader"
            }
            >
                {props.title.toUpperCase()}
            </p>
            <p>{props.description}</p>
        </div>
    )
}

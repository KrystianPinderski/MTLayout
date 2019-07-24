import React from 'react'
import './TitleHeader.css'
import '../../fonts/dosis/stylesheet.css'
export default function TitleHeader(props) {
    return (
        <div className={props.zIndex ? "TitleHeader-Container zIndex" : "TitleHeader-Container"}>
            <p className={`${
                props.bothSide ? "TitleHeaderCrossed"
                    : props.right ? "TitleHeaderRight"
                        : "TitleHeader"}`
                + `${props.background ? " background" :props.gradient?" gradient":""}`
            }
            >
                {props.title.toUpperCase()}
            </p>
            <p>{props.description}</p>
        </div>
    )
}

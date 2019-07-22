import React from 'react'
import './DiscographyItem.css';
import AppButton from '../AppComponents/AppButton';

export default function DiscographyItem(props) {
    return (
        <div className="Item">
            <div className="left">
                <p>{props.date.slice(0, 4)}</p>
                <p><b>{props.name.toUpperCase()}</b></p>
            </div>
            <div className="right">
                <h2 className="title">{props.articleTitle}</h2>
                <p className="description">{props.description}</p>
                <AppButton buttonColor={props.buttonColor} text="PLAY" onClick={console.log("Playing sth?")} />
            </div>
        </div>
    )
}

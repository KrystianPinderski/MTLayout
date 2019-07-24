import React from 'react'
import { Player } from 'video-react';
import LatterCompositionsCounter from './LatterCompositionsCounter';
import './LatterCompositionsItem.css'
import '../../../node_modules/video-react/dist/video-react.css'
import AppButton from '../AppComponents/AppButton';
var moment = require('moment');
const screenWidth = window.innerWidth

function LatterCompositionsItem(props) {
    const { composition } = props
    let soundString = composition.sound.toString()
    let sound = soundString.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ',');
    let loves;
    let share;
    if (composition.loves >= 1000) {
        let temp = parseInt(composition.loves / 1000);
        loves = temp.toString() + " k"
    } else {
        loves = composition.loves
    }
    if (composition.share >= 1000) {
        let temp = parseInt(composition.share / 1000);
        share = temp.toString() + " k"
    } else {
        share = composition.share
    }
    function left() {
        let date= moment(composition.date).format('DD-MM-YYYY')
        return (
            <div className="LatterLeft-Container">
                <div className="LatterItemBody-Container" >
                    <p>{date.slice(0,10)}</p>
                    <p>{composition.compositionName.toUpperCase()}</p>
                    <p>{composition.title}</p>
                    <p>{composition.description}</p>
                    <div className="LatterSocial-Container">
                        <AppButton buttonColor="transparent" text="Visit the iTunes >" />
                        <LatterCompositionsCounter sound value={sound} />
                        <LatterCompositionsCounter love value={loves} />
                        <LatterCompositionsCounter share value={share} />
                        <LatterCompositionsCounter comments value={composition.comments} />
                    </div>
                </div>
            </div>
        )
    }
    function right() {
        return (
            <div className="LatterRight-Container">
                <Player className="Player"
                    playsInline
                    poster={composition.backgroundImage}
                    src={composition.link}
                >
                    <div className={props.index % 2 !== 0 && screenWidth > 600 ? "TriangleRight" : "TriangleLeft"}>
                    </div>
                </Player>
            </div>
        )
    }
    return (
        screenWidth > 600 ?
            <div className={props.modal?"LatterItem-Container modal":"LatterItem-Container"}>
                {props.index % 2 !== 0 ? right() : left()}
                {props.index % 2 !== 0 ? left() : right()}
            </div>
            :
            <div className="LatterItem-Container">
                {left()}
                {right()}
            </div>
    )
}

export default LatterCompositionsItem
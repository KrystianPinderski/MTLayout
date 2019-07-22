import React from 'react'
import { Player } from 'video-react';
import LatterCompositionsCounter from './LatterCompositionsCounter';
import './LatterCompositionsItem.css'
import '../../../node_modules/video-react/dist/video-react.css'
import AppButton from '../AppComponents/AppButton';
const screenWidth = window.innerWidth

function LatterCompositionsItem(props) {
    const { composition } = props
    let soundString = composition.sound.toString()
    let sound = soundString.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ',');
    let love;
    let share;
    if (composition.loves > 1000) {
        let temp = composition.loves / 1000;
        love = temp.toString() + " k"
    } else {
        love = composition.love
    }
    if (composition.share > 1000) {
        let temp = composition.share / 1000;
        share = temp.toString() + " k"
    } else {
        share = composition.share
    }
    function left() {
        return (
            <div className="LatterLeft-Container">
                <p>{composition.data}</p>
                <h4>{composition.compositionName}</h4>
                <h4>{composition.title}</h4>
                <p>{composition.description}</p>
                <div className="LatterSocial-Container">
                    <AppButton buttonColor="transparent" text="Visit the iTunes >" />
                    <LatterCompositionsCounter sound value={sound} />
                    <LatterCompositionsCounter love value={love} />
                    <LatterCompositionsCounter share value={share} />
                    <LatterCompositionsCounter comments value={composition.comments} />
                </div>
            </div>
        )
    }
    function right() {
        return (
            <div className="LatterRight-Container">
                <Player className="Player"
                    src={composition.link}
                >
                    <div className={composition.id % 2 === 0 && screenWidth>600? "TriangleRight" : "TriangleLeft"}>
                    </div>
                </Player>
            </div>
        )
    }
    return (
        screenWidth>600?
        <div className="LatterItem-Container">
            {composition.id % 2 === 0 ? right() : left()}
            {composition.id % 2 === 0 ? left() : right()}
        </div>
        :
        <div className="LatterItem-Container">
            {left()}
            {right()}
        </div>
    )
}

export default LatterCompositionsItem
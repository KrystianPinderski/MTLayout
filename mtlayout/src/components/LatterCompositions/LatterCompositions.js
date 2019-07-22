import React, { Component } from 'react'
import TitleHeader from '../AppComponents/TitleHeader';
import './LatterCompositions.css'
import { connect } from 'react-redux'
import LatterCompositionsItem from './LatterCompositionsItem';

class LatterCompositions extends Component {
    render() {
        let { latterCompositions,compositions } = this.props
        return (

            <div className="LatterCompositions-Container">
                <TitleHeader id={latterCompositions.id} title={latterCompositions.title} description={latterCompositions.description} />
                <div className="LatterCompositions-Body">
                    {compositions.map((composition) => {
                        return <LatterCompositionsItem key={composition.id} composition={composition} />
                    })}
                </div>
            </div>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        compositions: state.compositions,
        latterCompositions: state.sections.find(element => element.title.toUpperCase() === "LATTER COMPOSITIONS")
    }
}
export default connect(MapStateToProps)(LatterCompositions)

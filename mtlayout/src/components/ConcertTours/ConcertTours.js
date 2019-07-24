import React, { Component } from 'react'
import concertBG from '../../images/concertBG.png';
import TitleHeader from '../AppComponents/TitleHeader';
import { connect } from 'react-redux';
import './ConcertTours.css'
import AppButton from '../AppComponents/AppButton';

class ConcertTours extends Component {
    render() {
        let { concertTours, tours } = this.props
        return (
            <div className="ConcertTours-MainContainer">
                <TitleHeader bothSide gradient title={concertTours.title} description={concertTours.description} />
                <div className="ConcertTours-Container" style={{ backgroundImage: `url(${concertBG})` }}>
                    <div className="Content-Container">
                        <div className="Header-Container">
                            <p>{tours.date.slice(0, 10)}</p>
                            <h4>{tours.name.toUpperCase()}</h4>
                        </div>
                        <div className="Body-Container">
                            <h2>{tours.title}</h2>
                            <p>{tours.description}</p>
                        </div>
                        <AppButton buttonColor="transparent" text="Buy online >" />
                    </div>
                </div>
            </div>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        concertTours: state.sections.find(element => element.title.toUpperCase() === "CONCERT TOURS"),
        tours: state.tours.find(element => element.name.toUpperCase() === "SMOKE + MIRRORS TOUR")
    }
}
export default connect(MapStateToProps)(ConcertTours)

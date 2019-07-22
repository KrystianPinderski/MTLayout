import React, { Component } from 'react'
import './About.css'
import Johny from '../../images/Johny.png'
const screenWidth = window.innerWidth
export default class About extends Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection:"column", margin: 0, padding: 0 }}>
                <img className="johny-image" style={screenWidth > 600 ? {
                    width: 300,
                    height: 280,
                    top: 140,
                    left: screenWidth * 0.4
                }
                    : { width: 200, height: 200, top: 150, left: screenWidth * 0.20 }} src={Johny} alt="Johny"></img>
                
            </div>
        )
    }
}

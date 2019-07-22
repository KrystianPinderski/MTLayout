import React, { Component } from 'react';
import './App.css';
import About from './components/About/About.js';
import AppNavBar from './components/AppNavBar/AppNavBar';
import Discography from './components/Discography/Discography';
import ConcertTours from './components/ConcertTours/ConcertTours';
import LatterCompositions from './components/LatterCompositions/LatterCompositions';
import NewTracks from './components/NewTracks/NewTracks';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Contact from './components/Contact/Contact';
import History from './components/History/History';
import aboutBG from './images/discographyBG.png';
import { connect } from 'react-redux';
import { setSections } from './actions/getActions';

class App extends Component {
  componentWillMount() {
    let section = [
      {
        id: 1,
        title: "Discography",
        description: "September 4 world heard Night Visions, the first full album. He reached the 2 position in the chart Billboard 200. The Single <<it's Time>> took 22 th place in the Billboard Hot 100, 4th in the Billboard Alternative and Billboard Rock, and now went platinum",
      },
      {
        id: 2,
        title: "Concert tours",
        description: "Before the release of Night Visions, Imagine Dragons made apperances on American radio and television to promote their extended play, Continued Silence and debut single It's Time. The band performed 'it's Time' on the July 16, 2012 airing of NBC late-night talk show. The Tonight Show with Jay Leno"
      },
      {
        id: 3,
        title: "Latter compositions",
        description: `"` + "It's Time " + `"` + "was released as the lead single from Continued Silence and it's Time, both extended plays preceding Night Visions' release."
      },
      {
        id: 4,
        title: "History",
        description: "In 2008, lead singer Dan Raynolds met drummer Andrew Tolman at Brigham Young University where they were both students. Tolman recruited longertime high school friend. Daniel Wayne " + `"` + "Wing " + `"` + "Sermon, who had graduated from Berklee College of Music"
      }
    ]
    this.props.setSections(section)
  }
  render() {
    return (
      <div className="App" >
        <AppNavBar />
        <section
          className="Container"
          id="About"
          style={{ backgroundImage: `url(${aboutBG})` }}
        >
          <About />
        </section>

        <section
          className="Container"
          id="Discography"
        >
          <Discography />
        </section>

        <section className="Container" id="ConcertTours">
          <ConcertTours />
        </section>

        <section className="Container" id="LatterCompositions">
          <LatterCompositions />
        </section>

        <section className="Container" id="NewTracks">
          <NewTracks />
        </section>

        <section className="Container" id="UpcomingEvents">
          <UpcomingEvents />
        </section>

        <section className="Container" id="History">
          <History />
        </section>

        <section className="Contact-Container" id="Contact">
          <Contact />
        </section>
      </div >
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSections: (section) => { dispatch(setSections(section)) }
  }
}

export default connect(null, mapDispatchToProps)(App);

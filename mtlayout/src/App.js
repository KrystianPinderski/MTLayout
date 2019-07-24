import React, { Component } from 'react';
import './App.css';
import About from './components/About/About.js';
import AppNavBar from './components/AppNavBar/AppNavBar';
import Discography from './components/Discography/Discography';
import ConcertTours from './components/ConcertTours/ConcertTours';
import LatterCompositions from './components/LatterCompositions/LatterCompositions';
import aboutBG from './images/discographyBG.png';
import { connect } from 'react-redux';
import { setSections, setAlbums, setTours, setCompositions, loadingState } from './actions/getActions';
const sections = require('./jsons/sections.js')
const albums = require('./jsons/albums.js');
const tours = require('./jsons/tours.js');
const composition = require('./jsons/compositions.js');

class App extends Component {
  componentWillMount() {
    /*instead of this:
    
    getAxios = () => {
      return axios.create({
        baseURL: "Here api link eg. http://myApi.com/"
      })
    }
    axios.getAxios().get('/EndpointForAlbums')
    .than(res=>{
      this.props.setAlbums(res.data)
    }).catch(err=>{
      //Do Sth with a err.
      console.log(err.status)
    })

    we got here jsonFiles where we get data. */
    this.props.setCompositions(composition)
    this.props.setTours(tours)
    this.props.setAlbums(albums)
    this.props.setSections(sections)
    this.props.loadingState({ loading: false })
  }
  render() {
    return (
      <div className="App" >
        {this.props.loading ? <div></div> : <div>
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
          </section></div>}
      </div >
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSections: (section) => { dispatch(setSections(section)) },
    setAlbums: (album) => { dispatch(setAlbums(album)) },
    setTours: (tour) => { dispatch(setTours(tour)) },
    setCompositions: (composition) => { dispatch(setCompositions(composition)) },
    loadingState: (loading) => { dispatch(loadingState(loading)) }
  }
}

export default connect(null, mapDispatchToProps)(App);

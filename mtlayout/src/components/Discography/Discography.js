import React, { Component } from 'react';
import botBG from '../../images/discographyDownBG.png';
import './Discography.css'
import DiscographyItem from './DiscographyItem';
import TitleHeader from '../AppComponents/TitleHeader';
import { connect } from 'react-redux';

let screenSize = window.innerWidth

class Discography extends Component {
    render() {
        let {discography,albums} = this.props
        return (
            <div className="Discography-Container">
                <div className="DiscographyTop-Container">
                    <TitleHeader zIndex id={discography.id}title={discography.title} description={discography.description} />
                </div>
                <div className="DiscographyBody-Container">
                    {albums.map((album)=>{
                        return <DiscographyItem key={album.id}
                        buttonColor={album.buttonColor} 
                        date={album.date}
                        name={album.name}
                        articleTitle={album.articleTitle}
                        description={album.description}
                        />
                    })}
                    {screenSize > 600 ? <img src={botBG} alt="Bottom BG" className="BotBG"></img> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        discography: state.sections.find(element => element.title.toUpperCase() === "DISCOGRAPHY"),
        albums:state.albums,
    }
}
export default connect(mapStateToProps)(Discography)
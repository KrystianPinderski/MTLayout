import React, { Component } from 'react'
import TitleHeader from '../AppComponents/TitleHeader';
import './LatterCompositions.css'
import { connect } from 'react-redux'
import LatterCompositionsItem from './LatterCompositionsItem';
import { setCompositions} from '../../actions/getActions';
import AddCompositionModal from '../Modals/AddCompositionModal';


class LatterCompositions extends Component {
    addComposition = (object) => {
        this.props.setCompositions(object)
    }
    render() {
        let { latterCompositions, compositions } = this.props
        return (
            <div className="LatterCompositions-Container">
                <TitleHeader title={latterCompositions.title} description={latterCompositions.description} />
                <div className="LatterCompositions-Body">
                    {compositions.map((composition, index) => {
                        return <LatterCompositionsItem key={composition.id} index={index} composition={composition} />
                    })}
                </div>
                <AddCompositionModal buttonText="Add composition" addComposition={this.addComposition}/>
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
const MapDispatchToProps = (dispatch) => {
    return {
        setCompositions: (composition) => { dispatch(setCompositions(composition)) },
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(LatterCompositions)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SelectedMovie extends Component {
    componentDidMount() {
        this.getSelectedMovie();
    }
   
    getSelectedMovie = () => {
        this.props.dispatch({ type: 'FETCH_MOVIE', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.match.params.id })
    }
    
    render() {
        return(
            <div className="selectedMovie">

            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
})
export default withRouter(connect(mapStateToProps)(SelectedMovie))
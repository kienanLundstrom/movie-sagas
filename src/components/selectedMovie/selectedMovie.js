import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class selectedMovie extends Component {


    
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
export default withRouter(connect(mapStateToProps)(selectedMovie))
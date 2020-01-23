import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';



class HomePage extends Component {
    // Renders the HomePage on the DOM
    componentDidMount() {
        this.getMovies();
    }
    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES'});
        console.log(this.props.reduxState.movies)
    }
    render(){
        return(
            <div className="HomePage">
                {this.props.reduxState.movies.map((movie) => {
                    return (
                        <p key={movie.id}>{movie.title}</p>
                    )
                  })
                }
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default withRouter(connect(mapStateToProps)(HomePage));
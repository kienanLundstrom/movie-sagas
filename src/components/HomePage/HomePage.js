import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './HomePage.css';
import { Grid, Paper } from '@material-ui/core';




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
                <h1>Movie Sagas</h1>
                <Grid container justify="center" spacing={32}>
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <Grid item md key={movie.id}>
                                <Paper>
                                    <img src={movie.poster} alt="movie poster" />
                                    <h4>{movie.title}</h4>
                                </Paper>
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default withRouter(connect(mapStateToProps)(HomePage));
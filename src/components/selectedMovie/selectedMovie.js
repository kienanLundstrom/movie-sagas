import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid, Paper } from '@material-ui/core';
import './SelectedMovie.css';


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
                <Grid container justify='center' spacing={32}>
                    <Paper height="100%">
                        {this.props.reduxState.movie.map((movie)=>{
                            return(
                                <Grid key={movie.id} item xs={12}>
                                    <img src={movie.poster}/>
                                    <h1>{movie.title}</h1>
                                    <Grid>
                                        <p>{movie.description}</p>
                                    </Grid>
                                </Grid>
                            )
                        })}
                         <h3>Genres:</h3>
                            {this.props.reduxState.genres.map((genre, i) => {
                                return (
                                    <p key={i}>{genre.name}</p>
                                )
                            })}
                    </Paper>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
})
export default withRouter(connect(mapStateToProps)(SelectedMovie))
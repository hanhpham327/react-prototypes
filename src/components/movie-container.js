import React,{Component} from 'react';
import Movie from './movies.js';
import axios from 'axios';

class movieContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        };

    }
    componentWillMount(){
        const ItunesApi="http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json"
        axios.get(ItunesApi).then((resp)=>{
            console.log('Resp: ', resp)
            this.setState({
                movies:resp.data.feed.entry
            })
            console.log('this state', this.state)
        })
    }
    render(){
        const movieList=this.state.movies.map((movieInfo,index)=>{
            return  (
                 <Movie info={movieInfo} key={index}/>
            ) 
        })
        
        return(
            <div>
                {movieList}
            </div>
        )
    
    };
        
}
export default movieContainer
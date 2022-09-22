import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const state = {
    
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event){
        
        const filteredRobots = this.state.robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        );

        console.log(filteredRobots);
    }

    render(){
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
            
        );
    }
    }
    

export default App;


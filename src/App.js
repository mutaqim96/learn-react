import React, { useState , useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

import './App.css';

// const state = {
    
// }

function App() {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
        
    // }

    //declare constant dan sini kita buat array distructuring
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('');

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response =>  response.json())
    //     .then(users => this.setState({robots:users}))
        
    // }

    const onSearchChange = (event) => {
        setSearchField(event.target.value);              
    }

    
        const filteredRobots = this.state.robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        );
        

        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else{
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
            
        );
        }
    
    }
    

export default App;


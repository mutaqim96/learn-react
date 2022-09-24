import React, { useState , useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

import './App.css';

// const state = {
    
// }

function App() {
    

    //declare constant dan sini kita buat array distructuring kita declare state 
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    

    //replicate componentDidMount
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => setRobots(users))
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);              
    }

    
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            }
        );
        

        if(robots.length === 0){
            return <h1>Loading</h1>
        }else{
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <button onClick={() => setCount}>Click Me</button>
                <SearchBox searchChange={onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
            
        );
        }
    
    }
    

export default App;


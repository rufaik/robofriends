import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from'./Scroll'
import './App.css'


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
        	searchfield:''
		}
	}
	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})

	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({robots:users}));
		
	}

	render () {
		const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className ='tc'>
		<h1 className='f2'> Robofriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
			<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
		);
	}
	}

export default App;
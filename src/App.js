import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // state = {
  //   progress:0
  // }
  // setProgress = (progress) => {
  //   this.setState({progress:progress})
  // }
  render() {
    return (
      <Router>
        <NavBar />
        {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> */}
        <Routes>
        <Route path='/' element = {<News  key="general" pageSize = {this.pageSize} category = "general"/>}></Route>
        <Route path='/business' element = {<News  key="business" pageSize = {this.pageSize} country = "in" category = "business"/>}></Route>
        <Route path='/entertainment' element = {<News  key="entertainment" pageSize = {this.pageSize} category = "entertainment"/>}></Route>
        <Route path='/general' element = {<News  key="general" category = "general"/>}></Route>
        <Route path='/health' element = {<News  key="health" pageSize = {this.pageSize} category = "health"/>}></Route>
        <Route path='/science' element = {<News  key="science" pageSize = {this.pageSize} category = "science"/>}></Route>
        <Route path='/sports' element = {<News  key="sports" pageSize = {this.pageSize} category = "sports"/>}></Route>
        <Route path='/technology' element = {<News  key="technology" pageSize = {this.pageSize} category = "technology"/>}></Route>
        </Routes>
      </Router>
    )
  }
}


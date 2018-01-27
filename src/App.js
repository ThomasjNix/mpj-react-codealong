import React, { Component } from 'react';
import './App.css';

let defaultStyles = {
    color: '#fff'
};

let mockServerData = {
    user: {
        name: "Tj"
    }
}

class Aggregate extends Component{
    render(){
    return(
      <div class="aggregate" style={{
          ...defaultStyles,
          display: 'inline-block',
          width: '40%'
        }}>
        <h2>Number Text</h2>
      </div>
    )
    }
}

class Filter extends Component{
    render(){
    return(
      <div style={ defaultStyles }>
        <img src="" alt=""/>
        <input type="text"/>
        Filter
      </div>
    )
    }
}

class Playlist extends Component{
    render(){
    return(
      <div style={{
        ...defaultStyles,
        display: 'inline-block',
        width: '25%'
        }}>
        <img src="" alt=""/>
        <h3>Playlist Name</h3>
        <ul style={{ listStyle: 'none' }}>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
           serverData: {}
        }
    }
    componentDidMount(){
      this.setState({
          serverData: mockServerData
      });
    }
    render() {
    return (
      <div className="App">
        <h1 style={{ 
          ...defaultStyles,
           fontSize: '54px'
           }}>{ this.state.serverData.user && this.state.serverData.user.name }'s Playlists</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
    }
}

export default App;

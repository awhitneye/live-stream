import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import axios from 'axios';
import style from './components/styles/app.css';
import ChatList from './components/ChatList';
import dummy from '../db/Sues-fake-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // streamList: [],
      currentStream: {},
      autoplay: 1,
    };
  }

  componentWillMount() {
    //ajax requests during willMount
  }
  
  changeVideo(selectedVideo) {
    // takes a selected video object and will change the "currentStream"
    this.setState({currentStream: selectedVideo});
  }

  changeVideoSet(data) {
    this.setState({streamList: data, currentStream: data[0]});
  }

  autoPlayChange() {
    this.setState({autoplay: +!this.state.autoplay});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            Search bar can go here to find list of Streams
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            Current Stream video can go here
          </div>
          <div className="col-md-5">
            Chat List can go here
          </div>
          <div className="col-md-5">
            Related Streams can go here
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;

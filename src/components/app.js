import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Kyler Cressall React Project</h1>
        {moment().format('MMM Do YYYY, h:mm:ss a')}
      </div>
    );
  }
}

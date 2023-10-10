import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src='/loader.gif' className="App-logo" alt="logo" />
      </div>
    )
  }
}

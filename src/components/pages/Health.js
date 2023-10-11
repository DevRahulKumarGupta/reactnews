import React, { Component } from 'react'
import NewsList from '../NewsList'

export default class Health extends Component {
  render() {
    return (
      <div>
        <NewsList chaneProgress={this.props.chaneProgress}  dataLimit={20} country="us" category="health" />
      </div>
    )
  }
}

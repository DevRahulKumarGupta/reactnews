import React from 'react'
import NewsList from '../NewsList'

export default function Technology(props) {
  return (
    <div>
        <NewsList chaneProgress={props.chaneProgress}  dataLimit={20} country="us" category="technology" />
      </div>
  )
}

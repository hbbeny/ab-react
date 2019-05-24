import React, { Component } from 'react'

class Gap extends Component {
  render () {
    return (
      <div
        style={{
          height: this.props.height ? this.props.height : '10px',
          width: this.props.width ? this.props.width : '100%',
          backgroundColor: this.props.color ? this.props.color : '#6BB53B'
        }}
      />
    )
  }
}

export default Gap

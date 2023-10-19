import React, { Component } from 'react'

export class ClassProps extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div>
            the course name is :{this.props.name}
        </div>
        <div>
            the course grade is {this.props.grade}
        </div>

      </div>
    )
  }
}

export default ClassProps
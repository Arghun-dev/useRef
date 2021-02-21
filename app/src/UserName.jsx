import React from 'react'

class UserName extends React.Component {
  state = {
    value: ""
  }

  changeValue(value) {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <h1>{value}</h1>
    )
  }
}

export default UserName;
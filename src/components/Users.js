import React, { Component } from "react"
import { connect } from "react-redux"
// add any needed imports here
class Users extends Component {
  users = () => {
    return this.props.users.map((user) => <li>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.users()}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        {this.props.usersCount}
      </div>
    )
  }
}

//add mapStateToProps here
const msp = (state) => {
  return { users: state.users, usersCount: state.users.length }
}
// connect this component to Redux
export default connect(msp)(Users)

import React from "react";
class UserClass extends React.Component {
  // if i want to use prop in class component then
  // we've to use constructor and super().
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="user-Card">
        <div className="userName">Name: {this.props.name}</div>
        <div className="userBio">Bio: {this.props.bio}</div>
        <div className="userLocation">Udaipur, 313003</div>
      </div>
    );
  }
}
export default UserClass;

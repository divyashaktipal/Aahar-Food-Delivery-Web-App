import React from "react";
class UserClass extends React.Component {
  // 1. Firstly constructor will be called, secondly render will be called and then componentDidMount will be called.

  // if i want to use prop in class component then
  // we've to use constructor and super().
  constructor(props) {
    // If you write super(props), the props are passed to the parent constructor.
    // This makes this.props available inside your component’s constructor.
    // Without it, this.props would be undefined in the constructor, even though React still passes props later.
    super(props);
    console.log(props);

    // state(variable) was created wehnever instance is created.
    // in class comp. , whenever we say loading some component it means we're creating an instance.
    this.state = {
      count: 0,
      // when we've to create more than 2 variable(state)
      count2: 2,
    };
    console.log("UserClass Constructor called");
  }

  // It is called after the component is mounted (inserted into the tree).
  // best place to make API calls
  // lifecycle method
  // componentDidMount is called only once after the first render
  // used to make side effects(API calls, timers)
  componentDidMount() {
    console.log("UserClass Component Did Mount called");
  }

  render() {
    // render will be called after constructor
    console.log("UserClass Render called");

    // deconstruct
    const { name, bio } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-Card">
        <div>Count State: {count2}</div>
        <div>
          <h1>Counter: {this.state.count}</h1>
        </div>
        <button
          onClick={() => {
            // Never mutate/update state variable directly
            // never do this.state.count = this.state.count + 1
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count Increase
        </button>
        <div className="userName">Name: {name}</div>
        <div className="userBio">Bio: {bio}</div>
        <div className="userLocation">Udaipur, 313003</div>
      </div>
    );
  }
}
export default UserClass;

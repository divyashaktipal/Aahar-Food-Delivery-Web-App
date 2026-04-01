import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
// class component
class About extends Component {
  constructor(props) {
    super(props);
    console.log("About(Parent) Constructor called");
  }
  componentDidMount() {
    console.log("About(Parent) Component Did Mount called");
  }

  render() {
    console.log("About(Parent) Render called");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About Us page of the Aahar Food Delivery Web App.</p>
        <User name={"Divyashakti Pal(Function)"} />
        <hr />
        <UserClass name={"Divyashakti"} bio={"Junior Software Engineer"} />
      </div>
    );
  }
}
export default About;

// export default function About() {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is the About Us page of the Aahar Food Delivery Web App.</p>
//       <User name={"Divyashakti Pal(Function)"} />
//       <hr />

//       <UserClass name={"Divyashakti"} bio={"Junior Software Engineer"} />
//     </div>
//   );
// }

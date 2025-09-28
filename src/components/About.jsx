import User from "./User";
import UserClass from "./UserClass";

export default function About() {
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

import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div>
      <h1>You're Not Authorized</h1>
      <Link to="/">Go To Home</Link>
    </div>
  );
}

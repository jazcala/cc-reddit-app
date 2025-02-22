import { Link } from "react-router-dom";

function Header() {
  return (
    <h1 className="p-0 my-3 display-1 text-center">
      <Link
        to="/"
        className="link-underline link-underline-opacity-0 text-black "
      >
        Reddit App
      </Link>
    </h1>
  );
}
export default Header;

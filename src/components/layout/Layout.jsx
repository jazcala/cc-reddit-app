import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SearchBar from "../searchBar/SearchBar";
import SubredditsList from "../subredditList/SubredditList";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container position-relative m-auto px-0 pb-4 row">
        <SearchBar />
        <SubredditsList />
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>My App Footer</p>
      </footer>
    </div>
  );
};

export default Layout;

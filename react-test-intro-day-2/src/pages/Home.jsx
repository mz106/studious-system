import HomePanel from "../components/homePanel/HomePanel";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <HomePanel />
        <Link to="/add-text">AddText</Link>
      </div>
    </>
  );
};

export default Home;

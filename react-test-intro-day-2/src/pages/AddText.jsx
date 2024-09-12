import AddTextPanel from "../components/addtextPanel/aDDtextPanel";
import { Link } from "react-router-dom";

const AddText = () => {
  return (
    <>
      <div>
        <h1>AddText</h1>
        <AddTextPanel />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default AddText;

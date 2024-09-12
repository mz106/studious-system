import { useState } from "react";

const AddTextPanel = () => {
  const [text, setText] = useState("Starting text");
  const [changingText, setChangingText] = useState("");

  const handleChange = (e) => {
    setChangingText(e.target.value);
    console.log(changingText);
  };

  const handleClick = () => {
    setText(changingText);
  };

  return (
    <>
      <div>
        <p>{text}</p>
        <div className="flex flex-column">
          <input
            type="text"
            placeholder="Type here..."
            onChange={handleChange}
          />
          <button onClick={handleClick}>Add the text</button>
        </div>
      </div>
    </>
  );
};

export default AddTextPanel;

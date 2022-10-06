import { useContext, useEffect, useState } from "react";
import StateContexts from "./context/StageContexts";

const UseStageContexts = () => {
  const { state, fetchAPI } = useContext(StateContexts);
  const [sortItems, setSortItems] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, [sortItems]);

  let sortNames = [...state];
  const handleClick = () => {
    sortNames = state.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setSortItems(sortNames);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <div>
        {sortNames.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </>
  );
};

export default UseStageContexts;

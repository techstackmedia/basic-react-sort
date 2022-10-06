import { useContext, useEffect, useState } from "react";
import StateContexts from "./context/StageContexts";

const UseStageContexts = () => {
  const { state, fetchAPI } = useContext(StateContexts);

  let sortNames = [];
  const handleClick = () => {
    sortNames = state
      .sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
      .map((item) => {
        return item.name;
      });
    console.log(sortNames);
    setSortItems(sortNames);
    return sortNames;
  };

  const [sortItems, setSortItems] = useState([]);
  console.log("sort", sortItems);
  useEffect(() => {
    fetchAPI();
  }, [sortItems]);

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <div>
        {sortItems.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </>
  );
};

export default UseStageContexts;

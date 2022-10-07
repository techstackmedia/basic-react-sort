import { useContext, useEffect, useState } from "react";
import StateContexts from "./context/StageContexts";

const UseStageContexts = () => {
  const { state, fetchAPI } = useContext(StateContexts);
  const [sortItems, setSortItems] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);

  let data = [...state];
  const handleAscendingClick = () => {
    const sortNames = [...state].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setSortItems(sortNames);
  };

  const handleResetClick = () => {
    setSortItems(state);
  };

  const handleDecendingClick = () => {
    const sortNames = [...state].sort((a, b) => {
      return a.name > b.name ? -1 : 1;
    });
    setSortItems(sortNames);
  };

  return (
    <>
      <button onClick={handleAscendingClick}>Ascending</button>
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleDecendingClick}>Decending</button>

      <div>
        {sortItems.length === 0
          ? data.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })
          : sortItems.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
      </div>
    </>
  );
};

export default UseStageContexts;

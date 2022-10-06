import { createContext, useState } from "react";
const StateContext = createContext();
const StateProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const fetchAPI = async () => {
    const response = await fetch(
      `https://staging.drugstoc.com/api/v2/inventory/manufacturer/all`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    );
    const data = await response.json();
    setState(data.results);
  };
  return (
    <StateContext.Provider value={{ state, fetchAPI }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider };
export default StateContext;

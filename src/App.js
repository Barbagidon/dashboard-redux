import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosition } from "store/position/position-actions";
import data from "./mock/data.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosition(data));
  });

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;

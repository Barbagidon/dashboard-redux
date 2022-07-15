import { JobPosition } from "./JobPosition";
import { useSelector } from "react-redux";
import { visiblePosition } from "../store/position/position-selectors";
import { getFilter } from "../store/filter/filter-selector";

const JobList = () => {
  const filters = useSelector(getFilter);
  const data = useSelector((state) => visiblePosition(state, filters));

  return (
    <div className="job-list">
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };

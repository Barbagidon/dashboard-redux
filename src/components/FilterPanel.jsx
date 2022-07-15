import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../store/filter/filter-selector";
import { removeFilters, removeFilter } from "../store/filter/filter-action";


const FilterPanel = () => {
  const filters = useSelector(getFilter);;
  const dispatch = useDispatch();
  if (filters.length < 1) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((item) => {
            return (
              <Badge
                key={item}
                variant="clearable"
                onClear={(filter) => dispatch(removeFilter(filter))}
              >
                {item}
              </Badge>
            );
          })}
        </Stack>

        <button className="link" onClick={() => dispatch(removeFilters())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };

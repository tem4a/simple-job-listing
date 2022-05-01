import { useSelector, useDispatch } from 'react-redux';
import { Stack } from '../UI/Stack';
import { Card } from '../UI/Card';
import { Badge } from '../UI/Badge';

import { selectFilter } from '../store/filter/filter.selectors';
import { removeFilter, clearFilter } from '../store/filter/filter.actions';

function FilterPanel() {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);

  if (!currentFilters.length) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((cf) => (
            <Badge
              key={cf}
              variant="clearable"
              onClear={() => dispatch(removeFilter(cf))}
            >
              {cf}
            </Badge>
          ))}
        </Stack>

        <button
          type="button"
          className="link"
          onClick={() => dispatch(clearFilter)}
        >
          Clear
        </button>
      </div>
    </Card>
  );
}

export { FilterPanel };

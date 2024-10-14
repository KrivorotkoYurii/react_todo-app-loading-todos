import React from 'react';
import { Filter } from '../../types/FilterEnum';
import cn from 'classnames';

interface Props {
  activeTodosCount: number;
  onFilterChange: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
}

export const Footer: React.FC<Props> = ({
  activeTodosCount,
  onFilterChange,
  filter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodosCount} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', { selected: filter === Filter.ALL })}
          data-cy="FilterLinkAll"
          onClick={() => onFilterChange(Filter.ALL)}
        >
          {Filter.ALL}
        </a>

        <a
          href="#/active"
          className={cn('filter__link', { selected: filter === Filter.ACTIVE })}
          data-cy="FilterLinkActive"
          onClick={() => onFilterChange(Filter.ACTIVE)}
        >
          {Filter.ACTIVE}
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: filter === Filter.COMPLETED,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onFilterChange(Filter.COMPLETED)}
        >
          {Filter.COMPLETED}
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};

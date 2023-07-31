import classNames from 'classnames';

import { SortTypes } from '../types/sort-types'

type SortProps = {
  currentSort: SortTypes;
  onSortClick: React.Dispatch<React.SetStateAction<SortTypes>>;
}
export const Sort = ({currentSort, onSortClick}: SortProps): JSX.Element => {
  return (
    <div className="sort">
      <div
        className={classNames("sort-title", {"current": currentSort === 'id'})}
        onClick={() => onSortClick('id')}
      >
        <span>ID</span>

        <svg width="12" height="7" aria-hidden="true">
          <use xlinkHref="#sort" />
        </svg>
      </div>

      <div
        className={classNames("sort-title", {"current": currentSort === 'title'})}
        onClick={() => onSortClick('title')}
      >
        <span>Заголовок</span>

        <svg width="12" height="7" aria-hidden="true">
          <use xlinkHref="#sort" />
        </svg>
      </div>

      <div
        className={classNames("sort-title", {"current": currentSort === 'body'})}
        onClick={() => onSortClick('body')}
      >
        <span>Описание</span>

        <svg width="12" height="7" aria-hidden="true">
          <use xlinkHref="#sort" />
        </svg>
      </div>
    </div>
  )
}

import classNames from 'classnames';

type PaginationProps = {
  currentPage: number;
  pagesCount: number;
  onPageClick: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({currentPage, onPageClick, pagesCount}: PaginationProps): JSX.Element => {
  const buttons = Array(pagesCount).fill('').map((element, index) => index + 1);

  return (
    <div className="pagination">
      <button
        className={classNames("pagination-prev", {"disabled": currentPage === 1})}
        onClick={() => onPageClick((current) => current === 1 ? current : current - 1)}
      >
        Назад
      </button>

      <div className="pagination-pages">
        {
          buttons.map((button) => (
            <button
              key={button}
              className={classNames("page", {"current": button === currentPage})}
              onClick={() => onPageClick(button)}
            >
              {button}
            </button>
          ))
        }
      </div>

      <button
        className={classNames("pagination-next", {"disabled": currentPage === pagesCount})}
        onClick={() => onPageClick((current) => current === pagesCount ? current : current + 1)}
      >
        Далее
      </button>
    </div>
  )
}

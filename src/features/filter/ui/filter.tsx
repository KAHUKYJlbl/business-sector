type FilterProps = {
  currentFilter: string;
  onFilterInput: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = ({currentFilter, onFilterInput}: FilterProps): JSX.Element => {
  return (
    <section className="filter">
      <input
        type="text"
        placeholder="Поиск"
        value={currentFilter}
        onChange={(e) => onFilterInput(e.target.value)}
      />

      <svg width="21" height="21" aria-hidden="true">
        <use xlinkHref="#filter" />
      </svg>
    </section>
  )
}

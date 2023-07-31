import { useState } from 'react';

import { Filter } from '../../../features/filter'
import { SvgSprite } from '../../../shared/ui/svg-sprite'
import { Posts } from '../../../widgets/posts'

const MainPage = (): JSX.Element => {
  const [currentFilter, setCurrentFilter] = useState('');

  return (
    <main>
      <SvgSprite />

      <div className="page-content">
        <Filter currentFilter={currentFilter} onFilterInput={setCurrentFilter} />

        <Posts filter={currentFilter} />
      </div>
    </main>
  );
}

export default MainPage

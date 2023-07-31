import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';
import { LoaderSpinner } from '../../../shared/ui/loader-spinner';
import { Pagination } from '../../../shared/ui/pagination';
import { Sort, SortTypes } from '../../../features/sort'

import { getPosts, getPostsLoadingStatus, getFilteredSortedPosts } from '../model/posts-selectors';
import { fetchPosts } from '../model/api-actions/fetch-posts';
import { getPagesCount } from '../lib/get-pages-count';
import { POSTS_PER_PAGE } from '../lib/const';
import { PostCard } from '../../../entities/post';
import { Oops } from '../../oops/ui/oops';

type PostsProps = {
  filter: string;
}

export const Posts = ({filter}: PostsProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState<SortTypes>('id');
  const posts = useAppSelector(getPosts);
  const sortedfilteredPosts = useAppSelector((state) => getFilteredSortedPosts(state, currentSort, filter));
  const postsLoadingStatus = useAppSelector(getPostsLoadingStatus);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!posts.length) {
    return <Oops type='posts' />
  }

  if (postsLoadingStatus.isLoading) {
    return <LoaderSpinner spinnerType='page' />
  }

  return (
    <section className="posts">
      <div className="table">
        <Sort currentSort={currentSort} onSortClick={setCurrentSort} />

        <div className="posts-list">
          {
            sortedfilteredPosts
              .slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
              .map((post) => (
                <PostCard post={post} key={post.id} />
              ))
          }
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        onPageClick={setCurrentPage}
        pagesCount={getPagesCount(sortedfilteredPosts.length)}
      />
    </section>
  )
}

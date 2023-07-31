import type { Post } from '../types/post';

type PostProps = {
  post: Post;
}

export const PostCard = ({post}: PostProps): JSX.Element => {
  return (
    <div className="posts-list_element">
      <div className="list-element_id">
        <span>{post.id}</span>
      </div>

      <div className="list-element_header">
        <span>{post.title}</span>
      </div>

      <div className="list-element_description">
        <span>{post.body}</span>
      </div>
    </div>
  )
}

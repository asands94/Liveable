

export default function Posts(props) {
  const { posts, handleDelete, currentUser } = props;
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {post.title}
          </div>
        )
      })}
    </div>
  )
}

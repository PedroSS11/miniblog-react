import styles from './Post.module.css'

// HOOKS
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

// ROUTER
import { Link } from 'react-router-dom'
const Post = () => {

  const { id } = useParams()
  const { document: post, loading } = useFetchDocument("posts", id)


  return (
    <div className={styles.post__container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p><span>Conteúdo:</span> {post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag}><span>#</span>{tag}</p>
            ))}
          </div>
          <Link to='/' className='btn'>Voltar</Link>
        </>
      )}
    </div>
  )
}

export default Post
import './index.css'

const CommentItem = props => {
  const {initialFakeData, onDelete, onLikeButton, formatDistanceToNow} = props
  const {id, name, comment, time, isLiked} = initialFakeData

  const likeButton = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickDelete = () => {
    // console.log(time.getdate())
    // console.log(new Date())
    onDelete(id)
  }
  const likeClicked = () => {
    onLikeButton(id)
  }

  return (
    <div>
      <p>
        <span className="person-first-letter">{name[0]}</span> {name}{' '}
        {formatDistanceToNow(new Date())}
      </p>
      <p>{comment}</p>
      <div className="like-delete-container">
        <img
          src={likeButton}
          alt="like"
          className="like-button"
          onClick={likeClicked}
        />
        <button onClick={onClickDelete} type="button" className="delete-button">
          <i className="bi bi-trash" />
        </button>
      </div>
    </div>
  )
}

export default CommentItem

import './index.css'

const CommentItem = props => {
  const {initialFakeData, onDelete, onLikeButton, formatDistanceToNow} = props
  const {id, name, comment, time, isLiked} = initialFakeData

  const likeButton = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickDelete = () => {
    onDelete(id)
  }
  const likeClicked = () => {
    onLikeButton(id)
  }

  return (
    <li>
      <p className="">
        <span className="person-first-letter">{name[0]}</span> {name}{' '}
        {formatDistanceToNow(time)}
      </p>
      <p>{comment}</p>
      <div className="like-delete-container">
        <button type="button">
          <img
            src={likeButton}
            alt="like"
            className="like-button"
            onClick={likeClicked}
          />
          LIKE
        </button>
        <button
          data-testid="delete"
          onClick={onClickDelete}
          type="button"
          className="delete-button"
        >
          <image
            alt="delete"
            src="https://th.bing.com/th/id/OIP.tdc_FVcWkPdXyA8saLq0hgHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

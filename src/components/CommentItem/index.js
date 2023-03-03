// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikeButton, deleteComment} = props
  const {id, name, comment, like, initialClassName, date} = commentDetails

  const likeImgUrl = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeContent = like ? 'liked-btn' : 'like-btn'

  const onClickLikeButton = () => {
    toggleLikeButton(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }
  return (
    <li className="list-style">
      <div className="name-container">
        <div className={`logo ${initialClassName}`}>
          <p className="logo-name">{name[0].toUpperCase()}</p>
        </div>
        <div className="name-comment-container">
          <div className="date-container">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button
          type="button"
          onClick={onClickLikeButton}
          className="like-button"
        >
          <img src={likeImgUrl} alt="like" className="like" />
          <span className={`${likeContent}`}>Like</span>
        </button>
        <button
          type="button"
          data-testid="delete"
          className="like-button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem

import {Component} from 'react'

import './index.css'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
    count: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = ` ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    // console.log(initialBackgroundColorClassName)

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      like: false,
      date: formatDistanceToNow(new Date(), {addSuffix: true}),
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredCommentsData = commentList.filter(each => each.id !== id)
    this.setState(prevState => ({
      count: prevState.count - 1,
      commentList: filteredCommentsData,
    }))
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, like: !eachComment.like}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, commentList, count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Comments</h1>
        <div className="add-comment-container">
          <form>
            <div className="top-container">
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                placeholder="Your Comment"
                rows="10"
                cols="50"
                value={comment}
                onChange={this.onChangeComment}
              >
                Your Comment
              </textarea>
              <button
                type="button"
                className="button"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr />
        <div className="count-container">
          <p className="count">{count}</p>
          <p className="count-para">Comments</p>
        </div>
        <ul className="comments-container">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleLikeButton={this.toggleLikeButton}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments

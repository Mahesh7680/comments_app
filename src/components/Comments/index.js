import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const fakeData = [
  {
    id: uuidv4(),
    name: 'mahesh',
    comment: 'ok',
    time: '',
    isLiked: false,
  },
]

class Comments extends Component {
  state = {initialFakeData: [], name: '', comment: '', count: 0}

  onUsername = event => {
    this.setState({name: event.target.value})
  }

  onAddComment = event => {
    this.setState({comment: event.target.value})
  }

  onCommentSubmit = event => {
    event.preventDefault()
    const {name, comment, count} = this.state
    this.setState(prevState => ({
      initialFakeData: [
        ...prevState.initialFakeData,
        {
          id: uuidv4(),
          name,
          comment,
          time: new Date(),
          isLiked: false,
        },
      ],
      count: prevState.count + 1,
    }))
  }

  onDelete = id => {
    const {initialFakeData} = this.state
    const filteredData = initialFakeData.filter(each => each.id !== id && each)
    this.setState(prevState => ({
      initialFakeData: filteredData,
      count: prevState.count - 1,
    }))
  }

  onLikeButton = id => {
    this.setState(prevState => ({
      initialFakeData: prevState.initialFakeData.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {initialFakeData, name, comment, count} = this.state
    // console.log(formatDistanceToNow(new Date())) // less than a minute
    console.log(initialFakeData)
    return (
      <>
        <form className="main-container" onSubmit={this.onCommentSubmit}>
          <div className="user-inputs-container">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={this.onUsername}
              //   required
            />
            <textarea
              cols="55"
              rows="8"
              value={comment}
              placeholder="Your Comment"
              onChange={this.onAddComment}
              //   required
            />
            <button
              type="submit"
              style={{backgroundColor: 'blue', border: 0, color: '#ffffff'}}
            >
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </form>
        <hr />
        <ul>
          <p>{count} comments</p>
          {initialFakeData.map(eachItem => (
            <CommentItem
              initialFakeData={eachItem}
              key={eachItem.id}
              onDelete={this.onDelete}
              onLikeButton={this.onLikeButton}
              formatDistanceToNow={formatDistanceToNow}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Comments

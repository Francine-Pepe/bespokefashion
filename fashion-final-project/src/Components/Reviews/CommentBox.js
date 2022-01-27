import React from "react"
import "./CommentBox.css"

class CommentBox extends React.Component {
  constructor() {
    super()

    this.state = {
      showComments: false,
      comments: [
        {
          id: 1,
          author: "Klara McGovan",
          body: "I bought a dress here and the dress is great! We did the custom fitting and it fits just perfectly! I am a very happy girl! Whenever we need a dress, that's where we'll buy it. Thank you so much for helping to make my 30th birthday much more extraordinary!",
        },
        {
          id: 2,
          author: "Scarlett J.",
          body: "I bought a jumpsuit from this store for my wedding! I know - unusual choice. I was a bit afraid of whether we would be able to make the changes if necessary. I have to admit that I was positively surprised to find it fits perfectly! My husband and all the guests were delighted! Thank you so much!!!",
        },
        {
          id: 3,
          author: "Ina Suomika",
          body: "Such a lovely experience. The girls made the experience really enjoyable even in the current climate. They were so helpful from start to finish., offering great advise and going above a beyond to help me find the perfect dress.",
        },
      ],
    }
  }

  render() {
    const comments = this._getComments()
    let commentNodes
    let buttonText = "Show Comments"

    if (this.state.showComments) {
      buttonText = "Hide Comments"
      commentNodes = <div className="comment-list">{comments}</div>
    }

    return (
      <div className="comment-box">
        <h2></h2>
        <CommentForm addComment={this._addComment.bind(this)} />
        <button
          id="comment-reveal"
          className="show-comments-btn"
          onClick={this._handleClick.bind(this)}
        >
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    )
  } // end render

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body,
    }
    this.setState({ comments: this.state.comments.concat([comment]) }) // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    })
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      )
    })
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet"
    } else if (commentCount === 1) {
      return "1 comment"
    } else {
      return `${commentCount} comments`
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input
            placeholder="Name"
            required
            ref={(input) => (this._author = input)}
          ></input>
          <br />
          <textarea
            placeholder="Comment"
            rows="4"
            required
            ref={(textarea) => (this._body = textarea)}
          ></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    )
  } // end render

  _handleSubmit(event) {
    event.preventDefault() // prevents page from reloading on submit
    let author = this._author
    let body = this._body
    this.props.addComment(author.value, body.value)
  }
} // end CommentForm component

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">
          <a
            href="#"
            className="comment-footer-delete"
            onClick={this._deleteComment}
          >
            Delete Comment
          </a>
        </div>
      </div>
    )
  }
  _deleteComment() {
    alert("-- DELETE Comment Functionality COMMING SOON...")
  }
}

export default CommentBox

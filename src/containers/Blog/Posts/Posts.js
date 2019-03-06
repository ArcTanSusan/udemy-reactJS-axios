import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    // selectedPostId: null,
    // error: false
  }

  componentDidMount() {
    // Used for side effects. Triggers a re-render.
    console.log("[Posts.js] componentDidMount")
    console.log(this.props);
    axios.get('/posts').then(
      response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({
          posts: updatedPosts
        })
      }
    )
    .catch(err => {
      console.log(err);
      // this.setState({error:true});
    });
  };

  postSelectedHandler = (postID) => {
    this.setState({
      selectedPostId: postID
    })
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}> Something went wrong. </p>

    if(!this.state.error) {
      posts = this.state.posts.map(post => {
        return (<Link to={'/'  +post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />
          </Link>);
      })
    }

    return (
      <section className="Posts">
          {posts}
      </section>
    )
  }
}

export default Posts;

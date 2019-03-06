import React, { Component } from 'react';
// import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import axiosinst from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

  render () {
      return (
          <div className="Blog">
            <header>
              <nav>
                 <ul>
                    <li><NavLink to='/'
                    exact
                    activeClassName='my-active'
                    activeStyle={{
                      color: "#fa923f",
                      textDecoration: 'underline'
                    }}>Home</NavLink></li>
                    <li><NavLink to={{
                      // Build a relative path with this.props.match.url.
                      // pathname: this.props.match.url + '/new-post',
                      // Below is an absolute path
                      pathname: '/new-post',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New Post</NavLink></li>
                 </ul>
              </nav>
            </header>

            {/*<Route path='/' exact render={() => <h1>Home</h1>} />
            <Route path='/' render={() => <h1>Home 2</h1>} /> }*/}
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/:id" exact component={FullPost} />
          </div>
      );
  }
}

export default Blog;

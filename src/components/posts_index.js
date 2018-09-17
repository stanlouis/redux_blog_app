import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  renderPosts = () => {
    return Object.values(this.props.posts).map(post => (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts });
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);

import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header';
import Headerline from './components/headline';
import Button from './components/button';
import Listitem from './components/listitem';
import { fetchPosts } from './actions';
import './app.scss';

const App = ({ posts, fetchPosts }) => {

  const onClick = () => {
    fetchPosts();
  }

  const buttonConfig = {
    onClick,
    text: 'Show posts!',
  }

  return (
    <div>
      <Header />
      <section className="main">
        <Headerline header="Posts" desc="Click the button to render posts!" />
        <Button {...buttonConfig} />
        <div>
          {posts && posts.map(post => {
            const listitemConfig = {
              title: post.title,
              body: post.body,
            }
            return (
              <Listitem key={post.id} {...listitemConfig} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);

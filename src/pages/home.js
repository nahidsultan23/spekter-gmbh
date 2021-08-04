import React from 'react';
import { connect } from 'react-redux';

import singlePost from '../components/singlePost';

import { fetchPosts } from '../store/actions/postActions';
import { createLoadingSelector } from '../store/selectors/createLoadingSelector';

export class Home extends React.Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        if (this.props.fetchPostsReducer.payload && this.props.fetchPostsReducer.payload.length) {
            this.setState({
                posts: this.props.fetchPostsReducer.payload,
            });
        } else {
            this.props.fetchPosts().then(() => {
                this.setState({
                    posts: this.props.fetchPostsReducer.payload,
                });
            });
        }
    }

    renderPosts = (posts) => {
        return posts.map((post) => {
            return (
                <div key={post.id} onClick={() => this.props.history.push('/posts/' + post.id)}>
                    {singlePost(post)}
                </div>
            );
        });
    };

    render() {
        const { posts } = this.state;
        const { isFetchingPosts } = this.props;
        return (
            <React.Fragment>
                {isFetchingPosts ? 'Loading...' : posts && posts.length ? this.renderPosts(posts) : 'No post to show'}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetchPostsReducer: state.fetchPostsReducer,
        isFetchingPosts: createLoadingSelector(['FETCH_POSTS'])(state),
    };
};

export default connect(mapStateToProps, { fetchPosts })(Home);

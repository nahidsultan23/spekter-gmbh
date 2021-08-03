import React from 'react';
import { connect } from 'react-redux';

import singlePost from '../components/singlePost';

import { fetchPosts } from '../store/actions/postActions';
import { createLoadingSelector } from '../store/selectors/createLoadingSelector';

export class Home extends React.Component {
    state = {
        posts: [],
    };

    UNSAFE_componentWillMount() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.fetchPosts().then(() => {
            this.setState({
                posts: this.props.postReducer.payload,
            });
        });
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
        postReducer: state.postReducer,
        isFetchingPosts: createLoadingSelector(['FETCH_POSTS'])(state),
    };
};

export default connect(mapStateToProps, { fetchPosts })(Home);

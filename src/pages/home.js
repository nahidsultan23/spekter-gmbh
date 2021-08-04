import React from 'react';
import { connect } from 'react-redux';

import singlePost from '../components/singlePost';

import { fetchPosts } from '../store/actions/postActions';
import { createLoadingSelector } from '../store/selectors/createLoadingSelector';
import loading from '../images/loading.gif';

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
                <div
                    className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
                    key={post.id}
                    onClick={() => this.props.history.push('/posts/' + post.id)}
                >
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
                <div className="element-container container-fluid">
                    <div className="create-post-button-div">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.props.history.push('/posts/create')}
                        >
                            Create Post
                        </button>
                    </div>
                    {isFetchingPosts ? (
                        <div className="middle-container">
                            <img src={loading} alt="Loading" />
                        </div>
                    ) : posts && posts.length ? (
                        <div className="row">{this.renderPosts(posts)}</div>
                    ) : (
                        <div className="middle-container">No post to show</div>
                    )}
                </div>
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

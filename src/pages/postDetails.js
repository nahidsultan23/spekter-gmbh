import React from 'react';
import { connect } from 'react-redux';

import { fetchPostDetails, deletePost } from '../store/actions/postActions';
import { createLoadingSelector } from '../store/selectors/createLoadingSelector';

export class PostDetails extends React.Component {
    state = {
        post: {},
    };

    componentDidMount() {
        let postId = this.props.match.params.id;

        this.props.fetchPostDetails(postId).then(() => {
            this.setState({
                post: this.props.postReducer.payload,
            });
        });
    }

    onDeletePost = () => {
        let postId = this.props.match.params.id;

        this.props.deletePost(postId).then(() => {
            console.log(this.props.postReducer.payload);
        });
    };

    render() {
        const { post } = this.state;
        const { isFetchingPost } = this.props;
        return (
            <React.Fragment>
                {isFetchingPost ? (
                    'Loading...'
                ) : post ? (
                    <div>
                        <div>
                            <div>User Id: {post.userId}</div>
                            <div>Id: {post.id}</div>
                            <div>Title: {post.title}</div>
                            <div>Body: {post.body}</div>
                        </div>
                        <div>
                            <button onClick={() => this.onDeletePost()}>Delete Post</button>
                        </div>
                    </div>
                ) : (
                    'Post not found'
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postReducer: state.postReducer,
        isFetchingPost: createLoadingSelector(['FETCH_POST_DETAILS'])(state),
    };
};

export default connect(mapStateToProps, { fetchPostDetails, deletePost })(PostDetails);

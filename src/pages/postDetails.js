import React from 'react';
import { connect } from 'react-redux';

import { fetchPostDetails, deletePost } from '../store/actions/postActions';
import { createLoadingSelector } from '../store/selectors/createLoadingSelector';
import loading from '../images/loading.gif';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';
import img18 from '../images/18.png';
import img19 from '../images/19.png';
import img20 from '../images/20.png';

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
            this.props.history.push('/');
        });
    };

    render() {
        const { post } = this.state;
        const { isFetchingPost } = this.props;
        let imageNumber = Number(this.props.match.params.id % 20);

        let imageToShow = img20;

        if (imageNumber === 1) {
            imageToShow = img1;
        } else if (imageNumber === 2) {
            imageToShow = img2;
        } else if (imageNumber === 3) {
            imageToShow = img3;
        } else if (imageNumber === 4) {
            imageToShow = img4;
        } else if (imageNumber === 5) {
            imageToShow = img5;
        } else if (imageNumber === 6) {
            imageToShow = img6;
        } else if (imageNumber === 7) {
            imageToShow = img7;
        } else if (imageNumber === 8) {
            imageToShow = img8;
        } else if (imageNumber === 9) {
            imageToShow = img9;
        } else if (imageNumber === 10) {
            imageToShow = img10;
        } else if (imageNumber === 11) {
            imageToShow = img11;
        } else if (imageNumber === 12) {
            imageToShow = img12;
        } else if (imageNumber === 13) {
            imageToShow = img13;
        } else if (imageNumber === 14) {
            imageToShow = img14;
        } else if (imageNumber === 15) {
            imageToShow = img15;
        } else if (imageNumber === 16) {
            imageToShow = img16;
        } else if (imageNumber === 17) {
            imageToShow = img17;
        } else if (imageNumber === 18) {
            imageToShow = img18;
        } else if (imageNumber === 19) {
            imageToShow = img19;
        }
        return (
            <React.Fragment>
                <div className="element-container container-fluid">
                    {isFetchingPost ? (
                        <div className="middle-container">
                            <img src={loading} alt="Loading" />
                        </div>
                    ) : post ? (
                        <div>
                            <div className="top-space"></div>
                            <div className="row post-details">
                                <div>
                                    <img className="single-post-photo" src={imageToShow} alt="post" />
                                </div>
                                <div>
                                    <h4>{post.title}</h4>
                                    <div>{post.body}</div>
                                </div>
                                <div className="delete-button-container">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => this.onDeletePost()}
                                    >
                                        Delete Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="middle-container">Post not found</div>
                    )}
                </div>
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

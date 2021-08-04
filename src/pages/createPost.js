import React from 'react';
import { connect } from 'react-redux';

import { createPost } from '../store/actions/postActions';
import { createLoadingSelector } from '../store/selectors/createLoadingSelector';

export class CreatePost extends React.Component {
    state = {
        userId: '',
        title: '',
        body: '',
        error: '',
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();

        let obj = {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body,
        };

        this.props.createPost(obj).then(() => {
            const { id } = this.props.postReducer.payload;

            if (!id) {
                this.setState({
                    error: 'Post was not created',
                });
            }
        });
    };

    render() {
        const { isCreatingPost } = this.props;
        return (
            <React.Fragment>
                <form
                    onSubmit={(e) => {
                        this.onSubmitForm(e);
                    }}
                >
                    <div>
                        <div>
                            <div>User Id</div>
                            <div>
                                <input type="text" name="userId" onChange={(e) => this.onValueChange(e)} />
                            </div>
                        </div>
                        <div>
                            <div>Title</div>
                            <div>
                                <input type="text" name="title" onChange={(e) => this.onValueChange(e)} />
                            </div>
                        </div>
                        <div>
                            <div>Body</div>
                            <div>
                                <input type="text" name="body" onChange={(e) => this.onValueChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Create Post</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postReducer: state.postReducer,
        isCreatingPost: createLoadingSelector(['CREATE_POST'])(state),
    };
};

export default connect(mapStateToProps, { createPost })(CreatePost);

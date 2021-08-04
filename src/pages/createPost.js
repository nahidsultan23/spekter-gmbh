import React from 'react';
import { connect } from 'react-redux';

import { createPost } from '../store/actions/postActions';

export class CreatePost extends React.Component {
    state = {
        userId: '',
        title: '',
        body: '',
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();

        this.props.createPost(this.state).then(() => {
            console.log(this.props.postReducer.payload);
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="element-container container-fluid">
                    <div className="top-space"></div>
                    <div className="row post-details">
                        <form
                            className="post-creation-form"
                            onSubmit={(e) => {
                                this.onSubmitForm(e);
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="userId">User Id</label>
                                <input
                                    type="text"
                                    name="userId"
                                    className="form-control"
                                    id="userId"
                                    placeholder="Enter user id"
                                    onChange={(e) => this.onValueChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="title"
                                    placeholder="Enter Title"
                                    onChange={(e) => this.onValueChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <input
                                    type="text"
                                    name="body"
                                    className="form-control"
                                    id="body"
                                    placeholder="Enter body"
                                    onChange={(e) => this.onValueChange(e)}
                                />
                            </div>
                            <div className="create-post-button-container">
                                <button className="btn btn-primary">Create Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postReducer: state.postReducer,
    };
};

export default connect(mapStateToProps, { createPost })(CreatePost);

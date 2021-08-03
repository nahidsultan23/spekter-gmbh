const singlePost = (obj) => {
    return (
        <div>
            <div>User ID: {obj.userId}</div>
            <div>Id: {obj.id}</div>
            <div>Title: {obj.title}</div>
            <div>Body: {obj.body}</div>
        </div>
    );
};

export default singlePost;

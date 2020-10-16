import React from 'react';

const BlogsPost = (props) => {
    const {title, description, author, authorImg,date} = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60" />
                <div>
                   <h6 className="text-primary">{author}</h6>
                   <p className="m-0">{date}</p>
                </div>
            </div>
            <div>
                <h5 className="card-body">{title}</h5>
                 <p className="card-text ml-3 text-secondary  mt-4">{description}</p>
            </div>
        </div>
    );
};

export default BlogsPost;
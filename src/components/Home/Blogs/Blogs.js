import React from 'react';
import wilson from '../../../images/wilson.png';
import BlogsPost from '../BlogsPost/BlogsPost';
import './Blogs.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for yout teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.  ',
        author:'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
            title: 'Check at least a doctor in a year for yout teeth',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.  ',
            author:'Dr. Sinthia',
            authorImg: wilson,
            date: '23 April 2019'
    },
    {
        title: 'Check at least a doctor in a year for yout teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.  ',
        author:'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    }
]

const Blogs = () => {
    return (
       <section className="blog my-5">
           <div className="container">
               <div className="section-header text-center">
                  <h5 className="text-primary text-uppercase">Our Blog</h5>
                  <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                   {
                      blogData.map( blog => <BlogsPost blog={blog} key={blog.title}></BlogsPost>)
                   }
               </div>
           </div>

       </section>
    );
};

export default Blogs;
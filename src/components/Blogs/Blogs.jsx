import React from 'react';
import './Blogs.css';
import Card from './BlogCrad/Card';
import blogData from './BlogCrad/CardData';

const Blogs = () => {
    return (
        <>
            <div className="Blogs" id="blog">
                <div className="text-section">
                    <h1 className="main-heading">BLOG</h1>
                    <h1 className="b-heading">Stay updated with our latest news</h1>
                </div>
                <div className="cards">
                    {
                        blogData.map((val) => {
                            return (
                                <Card
                                    img={val.img}
                                    heading={val.heading}
                                    title={val.title}
                                    desc={val.desc}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blogs;

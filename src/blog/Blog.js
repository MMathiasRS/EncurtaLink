import React from 'react'

import { useEffect, useState } from "react"
import { useFetch } from '../hooks/Hooks';
import "./blog.css"
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';




const url = "https://blog-mmathiasrs.vercel.app/posts"



const Blog = () => {

    const { data: Post } = useFetch(url)


    return (
        <div className='home'>





            {
                Post && Post.map((posts) => (
                    <div className='row'>

                        <div className='column'>
                            <div className='card'>
                                <img src={posts.img}></img>
                                <h2>{posts.titulo}</h2><br></br>
                                <p>{posts.sobre}</p>

                            </div>




                        </div>
                    </div>

                ))
            }
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6891333234726935"
                crossorigin="anonymous"></script>
        </div>
    )
}

export default Blog
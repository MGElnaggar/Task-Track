import React from 'react';
import useFetch from '../../CustomHook/useFetch';

import NavigationMenu from '../NavigationMenu/NavigationMenu';

import style from './PostList.module.css';

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostsList: React.FC = () => {
    const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={style.postList}>
            <NavigationMenu />
            <div className={style.postListContainer}>
                <h1 className={style.header}>Posts</h1>
                <ul>
                    {data && data.map((post) => (
                        <li key={post.id} className={style.postItem}>
                            <h2 className={style.postTitle}>{post.title}</h2>
                            <p className={style.postBody}>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostsList;

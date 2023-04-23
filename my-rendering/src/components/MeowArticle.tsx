'use client';
import {useEffect, useState} from "react";

const MeowArticle = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com')
            .then(res => res.json())
            .then(data => setText(data.data[0]));
    },[]);

    return(
        <article>
            <h3>{text}</h3>
        </article>
    )
};

export default MeowArticle
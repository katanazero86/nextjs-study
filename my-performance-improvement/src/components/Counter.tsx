'use client';

import {useState} from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    console.log('안녕! - 클라이언트');
    return <>
        <p>{count}</p>
        <button onClick={() => setCount(current => current + 1)}>숫자 증가</button>
    </>
};

export default Count
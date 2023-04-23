import Image from 'next/image'
import styles from './page.module.css'

import os from 'os'; // Node.js APIs

export default function Home() {

    console.log('안녕!');
    console.log(os.hostname());

    return (
        <div>
            <h1>나는 my-rendering 홈페이지!</h1>
        </div>
    )
}

import os from 'os';
import Counter from "@/components/Counter"; // Node.js APIs

export default function Home() {

    console.log('안녕!');
    console.log(os.hostname());

    return (
        <div>
            <h1>나는 my-rendering 홈페이지!</h1>
            <Counter/>
        </div>
    )
}

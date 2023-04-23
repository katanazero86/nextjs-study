import os from 'os'; // Node.js APIs
import Counter from "@/components/Counter";

export default function Home() {

    console.log('안녕! - 서버');
    console.log(os.hostname());

    return (
        <div>
            <h1>나는 my-rendering 홈페이지!</h1>
            <Counter/>
        </div>
    )
}

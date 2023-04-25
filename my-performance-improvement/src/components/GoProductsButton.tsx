'use client';

import {useRouter} from "next/navigation";

const GoProductsButton = () => {

    const router = useRouter();

    return <button onClick={() => {
        router.replace('/products');
    }
    }>상품 페이지로 가기</button>
}

export default GoProductsButton
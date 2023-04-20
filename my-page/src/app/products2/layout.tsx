import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: '멋진 제품!',
    description: '멋진 제품을 연습!',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function Products2Layout({children} : {children: ReactNode}) {
    return (
        <div>
            <h3 style={{color: 'red'}}>나는 상품2 레이아웃!!</h3>
            <hr/>
            {children}
        </div>
    )
}
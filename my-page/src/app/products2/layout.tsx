import {ReactNode} from "react";

export default function Products2Layout({children} : {children: ReactNode}) {
    return (
        <div>
            <h3 style={{color: 'red'}}>나는 상품2 레이아웃!!</h3>
            <hr/>
            {children}
        </div>
    )
}
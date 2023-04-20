import Link from "next/link";

export default function Products2() {
    return (
        <div>
            <h1>나는야 상품페이지2!!</h1>
            <ul>
                <li>
                    <Link href='/products2/shirt'>셔츠</Link>
                </li>
                <li>
                    <Link href='/products2/pants'>바지</Link>
                </li>
                <li>
                    <Link href='/products2/skirt'>스커트</Link>
                </li>
            </ul>
        </div>
    )
}
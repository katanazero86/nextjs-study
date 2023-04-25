import {getProducts} from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css'
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from '../../../public/images/clothes.jpg';

// ISR
// export const revalidate = 3; // 단위는 sec 기본값은 false
export default async function ProductsPage() {

    // throw new Error();
    const products = await getProducts();

    const res = await fetch('https://meowfacts.herokuapp.com', {next: { revalidate: 3}});
    const data = await res.json();
    const factText = data.data[0];
    return (
        <>
            <h1>제품 소개 페이지!</h1>
            <Image src={clothesImage} alt='clothesImage'/>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <article className={styles.article}>
                {factText}
            </article>
            <MeowArticle/>
        </>
    );
}

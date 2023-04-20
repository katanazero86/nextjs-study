import {notFound} from "next/navigation";
import {Metadata} from "next";

interface Props {
    params: {
        slug: string;
    }
}

export function generateMetadata(props: Props): Metadata {
    console.log(props);
  return {
      title: `${props.params.slug} 제목!`,
      description: '응 슬러그!'
  }
};
export default function ProductsDetail(props: Props) {
    const {params} = props;
    if(params.slug === 'nothing') notFound();
    return <h1>{params.slug} 나는 상품 상세!</h1>
}

export function generateStaticParams() {
    const products = ['1', '2'];
    return products.map(product => ({
        slug: product
    }));
}

interface Props {
    params: {
        slug: string;
    }
}
export default function ProductsDetail(props: Props) {
    const {params} = props;
    return <h1>{params.slug} 나는 상품 상세!</h1>
}
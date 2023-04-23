import {NextApiRequest, NextApiResponse} from "next";
import {getProducts} from "@/service/products";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const products = await getProducts();
    return res.status(200).json(products);
}
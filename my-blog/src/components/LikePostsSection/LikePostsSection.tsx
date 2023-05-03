'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@/components/Card/Card";
import CustomLeftArrow from "@/components/Buttons/CustomLeftArrow/CustomLeftArrow";
import CustomRightArrow from "@/components/Buttons/CustomRightArrow/CustomRightArrow";
import {Post} from "@/types/posts";
import {useEffect, useState} from "react";

const responsive = {
    desktop: {
        breakpoint: {max: 3840, min: 768},
        items: 3,
        partialVisibilityGutter: 10
    },
    tablet: {
        breakpoint: {max: 768, min: 464},
        items: 2,
        partialVisibilityGutter: 10
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        partialVisibilityGutter: 10
    }
};

const LikePostsSection = () => {

    const [data, setData] = useState<Post[]>([]);

    const getLikePosts = async () => {
        // like 이나, 사실은 전부 가지고오는것
        const res = await fetch('/api/posts/like', {
            method: 'get'
        });
        const targetData: Post[] = await res.json();
        setData(targetData);
    };

    useEffect(() => {
        getLikePosts();
    }, []);

    return (
        <section className="py-4">
            <h3 className="text-lg font-semibold text-slate-900">You may like</h3>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                centerMode={true}
                transitionDuration={500}
                responsive={responsive}
                itemClass="p-2"
                customRightArrow={<CustomRightArrow/>}
                customLeftArrow={<CustomLeftArrow/>}
            >
                {data.map(item => <Card key={item.path}
                                        title={item.title}
                                        description={item.description}
                                        date={item.date}
                                        category={item.category}
                                        path={item.path}/>)}
            </Carousel>
        </section>
    )
}

export default LikePostsSection
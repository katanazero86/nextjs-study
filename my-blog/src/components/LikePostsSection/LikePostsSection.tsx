'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@/components/Card/Card";
import CustomLeftArrow from "@/components/Buttons/CustomLeftArrow/CustomLeftArrow";
import CustomRightArrow from "@/components/Buttons/CustomRightArrow/CustomRightArrow";

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
    return (
        <section className="py-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">You may like</h3>
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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Carousel>
        </section>
    )
}

export default LikePostsSection
import Profile from "@/components/Profile/Profile";
import AboutItem from "@/components/AboutItem/AboutItem";

export default function About() {

    const aboutItems = [
        {
            title: 'Who am I?',
            description: `안녕하세요. 프론트엔드 개발자 배창현 입니다.
좋은 코드와 설계를 늘 고민하며, 지식을 공유하는 문화를 선호하며 이를 통해 같이 성장하는 문화를 좋아합니다.`
        },
        {
            title: 'Career?',
            description: `(주)아이씨티어스 | Front-end Developer (2021.11.22 - ing)
헬스앤메디슨 | Front-end Developer (2020.09.21 - 2021.05.28)
프레시코드 | Front-end Developer (2018.10.01 - 2020.02.24)
오직(주) | Back-end Developer (2016.06.07 - 2018.03.16)`,
        },
        {
            title: 'Skills?',
            description: `JavaScript, TypeScript, HTML5/CSS3, SASS(SCSS), Emotion, Stitches
Vue, Vuex, Nuxt
React, Redux, Redux-saga, Recoil, React-Query`
        },
    ];

    return (
        <main className="px-5">
            <Profile/>
            <section className="rounded-xl p-8 bg-slate-100 mt-2">
                {aboutItems.map(item => <AboutItem key={item.title} title={item.title}
                                                   description={item.description}/>)}
            </section>
        </main>
    )
}

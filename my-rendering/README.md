### 최신 버전의 큰 차이점

- v12 에서는 페이지 단위로 렌더링 방식을 규정   
getStaticProps(), getServerSideProps() -> pages 경로내에 작성하는 컴포넌트 내에 SSG 를 사용할지, SSR 을 사용할지에 대한 메서드들을 정의해서 사용
- v13 에서는 Server Component, Client Component 라는 개념이 도입 -> 컴포넌트 단위로 렌더링 방식을 규정   
app 폴더내에 존재하는 모든 컴포넌트는 기본적으로 Server Component

### Server Component
- v13 에서 추가된 app 폴더에서 작성하는 컴포넌트는 기본적으로 Server Component 다. -> my-rendering/src/app/page.tsx 컴포넌트에 console.log() 를 작성해서 확인해보자.

![img.png](imgs/img.png)

브라우저 개발자 도구 콘솔에서는 아무 출력이 되지 않으며, 서버상 컴포넌트에서만  '안녕!' 이 출력되는게 확인이 가능   

서버 컴포넌트는 서버상에서 실행이 되어짐
서버 컴포넌트는 브라우저에서 제공해주는 API 사용은 불가능하며, 다만 Node.js API 사용은 가능 + useState() 훅 등도 사용이 불가능

![img.png](imgs/img2.png)

브라우저 개발자 도구 콘솔에서는 아무것도 출력이 되지 않는다.
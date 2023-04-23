### 최신 버전의 큰 차이점

- v12 에서는 페이지 단위로 렌더링 방식을 규정   
getStaticProps(), getServerSideProps() -> pages 경로내에 작성하는 컴포넌트 내에 SSG 를 사용할지, SSR 을 사용할지에 대한 메서드들을 정의해서 사용
- v13 에서는 Server Component, Client Component 라는 개념이 도입 -> 컴포넌트 단위로 렌더링 방식을 규정   
app 폴더내에 존재하는 모든 컴포넌트는 기본적으로 Server Component

### Server Component

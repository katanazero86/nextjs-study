# my-blog

---

- 개발환경
```
OS: window
node: v16.16.0
npm: v8.11.0
next.js: v13.3.0
react.js: v18.2.0
typescript: v5.0.4
tailwindcss: v3.3.2
```
next.js v13에 추가가 된 app 폴더를 적극 활용하여 개발 및 학습

tailwindcss 설정 문서 참조: https://tailwindcss.com/docs/guides/nextjs


- 기능 및 UI(하나씩 개발해 나가면서 추가 예정)
```
2023.04.28
- 프로젝트 생성

2023.04.29
- Header, Footer 컴포넌트 작성 및 RootLayout 컴포넌트에 적용
- Profile 컴포넌트 작성 및 적용

2023.04.30
- about 페이지 작업 및 스타일링
- AboutItem 컴포넌트 작성 및 스타일링
- PostsSection 컴포넌트 작성 및 스타일링(작성된 게시물에 대한 container UI)
- PostsSection 에 사용할 Card 컴포넌트 작성 및 스타일링(참조: https://v1.tailwindcss.com/components/cards)
- tailwind grid class 를 활용하여, 카드 UI 부분 반응형 작업

2023.05.01
- contact 페이지 작업 및 스타일링
- LikePostsSection 컴포넌트 작성 및 스타일링(캐로셀 UI 형태로 작성된 게시물을 보여줌)
- 캐로셀 UI 모듈 설치(react-multi-carousel) / 캐로셀에서 사용할 Left, Right 커스텀 버튼 컴포넌트 작성 및 스타일링

2023.05.02
- contact 페이지의 email 기능 구현
nodemailer 모듈 활용
- 유효성 검사를 위해, yup 모듈 설치 및 mailFormSchema 작성
- 메일 전송 성공 및 실패 시, 사용할 FailToast, SuccessToast 컴포넌트 작성
- 메일 API 라우팅(post /api/mail) 및 서버 로직 작성
- posts 페이지 작업 및 스타일링

* gmail 을 사용하면, from 을 무조건 인증된 사용자로 변경함(앱 비밀번호를 발급받은 사용자의 이메일 주소)

2023.05.03
- api 라우팅 작성(api/posts/[type]) 및 연동
- index 페이지에서 데이터를 불러오는 부분 작업 및 예시 md 파일 및 json 파일 생성
- Card 컴포넌트 스타일링 수정

2023.05.04
- api 라우팅 작성(api/posts) 및 연동
- posts 페이지 데이터를 불러오는 부분 작업 및 카테고리 별 라우팅 처리
- posts 페이지 카테고리 nav 영역 PostsCategoryNav 클라이언트 컴포넌트로 분리 및 해당 path 에 따른 스타일링 적용

참조
1. https://nodemailer.com/about/
2. https://velog.io/@mimi0905/Nodemailer%EB%A1%9C-%EB%A9%94%EC%9D%BC-%EB%B3%B4%EB%82%B4%EA%B8%B0-with-%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC
3. https://www.youtube.com/watch?v=t2LvPXHLrek
4. https://www.npmjs.com/package/yup

```
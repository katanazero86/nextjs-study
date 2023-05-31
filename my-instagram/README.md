# my-instagram

---

- 개발환경
```
OS: window
node: v16.16.0
npm: v8.11.0

next.js: v13.4.1
react.js: v18.2.0
typescript: v5.0.4
tailwindcss: v3.3.2
daisyui: v2.51.6
```

- 기능
```
1. 로그인, 로그아웃(로그인은 social login: google)
2. 로그인 된 사용자는 index 페이지로 이동
3. 로그인한 사용자의 follwing 사용자 / 로그인한 사용자의 소개 및 링크
4. card 형태 UI 로 게시글이 나열되어있음
5. card ui 에는 사용자의 아바타, 사용자의 ID, 사진, 좋아요, 즐겨찾기, 작성시간(상대적인 시간), 내용 및 댓글이 있음
6. 사진 및 View all comments 를 클릭하면 상세로 이동
7. 검색 페이지, 마이 페이지 등이 존재함
```

---

- 작업
```
2023.05.08
- react-icons 패키지 추가
- Header 컴포넌트 작성
- FollowingSection, FollowingUserAvatar 컴포넌트 작성

2023.05.09
- like 및 bookmark 아이콘 컴포넌트 작성 및 스타일링
- PostCard 컴포넌트 작성 및 스타일링
- sanity 가입 및 sanity 경로에 sanity-studio 프로젝트 생성
- 강의 참조하여 User, Post 스키마 정의 및 sanity-studio 를 사용하여 더미 데이터 생성
데이터를 추가했으나, 가독성이 떨어짐 -> sanity-studio 도 웹앱이므로 개선이 가능

2023.05.11
- Next Auth 부분 추가 및 간단하게 테스트
- 로그인 페이지 작성 및 스타일링
- layout 을 구분해서 사용하고자, Routes Groups 를 사용하여 root layout 분리

2023.05.14
- Next Auth 를 활용한 로그인 기능 구현 및 테스트 완료
- login 이 되어있으면, / 로 이동, 되어 있지 않다면 /login 페이지로 이동 
- next auth 에서 decode 에러가 발생을 한다면, NEXTAUTH_URL, NEXTAUTH_SECRET 환경변수 생성하기
- 로그인한 사용자에 이미지로 아바타 이미지 처리하도록 변경 및 session 콜백 작성 및 session 타입 커스텀
참조:https://next-auth.js.org/getting-started/typescript

문서를 보면, v13 이전에 코드로 작성이 되어있으나 몇가지만 기억하면 작성이 가능

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";

// 이부분은 Client Component 에서 작성을 해주자.
export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// 이부분은 ServerComponent 에 작성을 해주자.
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}

2023.05.15
- next-sanity 모듈 추가
참조: https://www.sanity.io/docs/js-client#quickstart
참조: https://www.sanity.io/docs/connect-your-content-to-next-js

Insufficient permissions; permission "create" required
-> sanity 프로젝트에서 token 을 발급 후 설정해 주자.

- 로그인 시, 없는 정보면 sanity context-lake 에 create + create 시, 기존에 있는 사람이면 그냥 패스.

2023.05.18
- 상세 모달 UI 작성 및 컴포넌트 명명 변경 및 폴더명 변경
daisy ui modal 토글링을 어떤 태그에 하는지 + text-overflow 가 적용안되는 부분으로 인해 시간을 많이 소요

2023.05.19
- swr 모듈 추가
- SWRConfigContext 파일 생성 및 작성
- sanity 부분 수정 및 model 작성
- sanity-studio 내에 user 스키마에 커스텀 Rule 작성
- swr 을 활용하여, 팔로잉한 사용자가 출력이 되도록 FollowingSection 컴포넌트 코드 작성

2023.05.22
- SWR 리페칭 되는 부분 옵션 수정
- Post 스키마에서 데이터 페칭을 위한 코드 작성 및 GROQ 작성
- @sanity/image-url, timeago.js 모듈 추가
- 데이터 페칭 및 컴포넌트 데이터 바인딩 및 테스트   

GROQ 작성하고, 문서 살펴보느라 진행이 너무 더디다.. 일단은 강의보고 빨리 진행을 해야할거같음

2023.05.23
- 포스트 상세 모달 부분 구현(React portal 사용)
- 검색 부분 구현 및 GROQ 작성, API 로직 구현 및 데이터 바인딩

2023.05.25
- 사용자 페이지 구현
- 사용자 페이지 조회, posts, saved, liked 부분 구현 및 이미지 클릭 시 상세 모달 출력되도록 작성
- 검색된 사용자 클릭을 하면 사용자 페이지로 이동

2023.05.26
- 코드 리팩토링
- 폴더 수정 및 각 컴포넌트들 이동
- 아토믹한 컴포넌트 작성 및 코드 적용

2023.05.27
- like toggle 기능 구현
- 데이터 페칭 최적화
mutate 옵션 활용
optimisticData: UI 상 데이터를 이걸로 먼저 사용
populateCache: 반환된 값으로 캐시에 기록
revalidate: 업데이트가 완료되면 유효성을 다시 검사(리페칭)
rollbackOnError: 에러가 발생하면, optimisticData 로 업데이트 한 부분을 이전으로 되돌림

2023.05.29
- bookmark toggle 기능 구현
- GROQ 변경 및 API 라우팅 변경

2023.05.31
- 코멘트 기능 구현
- 팔로우 기능 구현

팔로우 기능 같은 경우에는 변화가 2가지가 일어남
팔로우를 하면, 나 following 에 해당 유저 추가
해당 유저 followers 에 내가 추가
-> transaction() 으로 묶어서 처리

Next.js 에서 제공해주는 mutating data 로 렌더링 갱신이 가능
router.refresh() 해보는거 구현해봄

2023.05.31
- 버그 찾아서 개선

```

![img.png](imgs/img.png)
sanity-studio 에서 저걸 하나하나 클릭해야, 누가 작성했고 이미지는 뭔지 확인이 가능   
List Previews 이용하여 개선이 가능

참조: https://www.sanity.io/docs/previews-list-views
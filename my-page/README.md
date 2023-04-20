### 정적 라우팅(버전12)
- 파일을 기반으로 간편하게 라우팅이 가능

/app 경로는 v13 에서 추가가 되었음   
v13 이전에는 pages 폴더에서 작업을함

- 파일 기반 라우팅이라는 개념은 우리가 정해진 폴더내에 리액트 컴포넌트를 작성해주면 페이지처럼 라우팅 처리를 해줌

- v12 버전은 pages 에 컴포넌트를 작성하여 라우팅 처리
```
/about
/products
/products/pants
```

---

### 정적 라우팅(버전13)
- 왜 app 폴더가 추가가 되었을까?   
공통으로 유지하고 싶은 UI요소가 있는 경우 기존에 사용하던 pages 로는 한계   
기존 pages 에 대한 기능을 수정하면 13버전으로 업데이트 하면서 기존 코드를 다 수정해야함 -> 영향을 주지 않도록 따로 app 으로 만들자

- v13 에서는 app 경로내에 page 라는 컴포넌트를 작성하면 자동으로 라우팅이 되어짐
- about 과 contact 와 같은 라우팅을 생성하고 싶다면, app 에서는 아래와 같이 작성
```
app/contact/page.tsx
app/about/page.tsx
위와 같은 구조로 폴더를 생성하고 아래에 page 파일 생성

/about2
```

v13 에서는 구조가 v12 에 비하면 불편해졌다고 느낄수는 있음   
하지만 loading, error, layout 등 경로별로 지정하고 만들 수 있기에 기능이 더 좋아졌다고 생각함

---

### 정적 라우팅 챌린지
-pages 에 작성된 products 를 app 에 작성해보시오.
```
/products2
/products2/pants2
```

---

### 빌드 결과 분석해보기

- /products2 를 요청해보고 콘솔을 살펴보자.   
```
wait  - compiling /products2/page (client and server)...
event - compiled client and server successfully in 720 ms (610 modules)
wait  - compiling /products2/pants2/page (client and server)...
event - compiled client and server successfully in 837 ms (612 modules)
```
-> 개발 모드에서는 요청할 때 페이지를 새롭게 생성

- 빌드를 하면 어떨까?

```
Route (app)                                Size     First Load JS
┌ ○ /                                      257 B          74.4 kB
├ ○ /about2                                145 B          74.2 kB
├ ○ /api/hello                             0 B                0 B
├ ○ /favicon.ico                           0 B                0 B
├ ○ /products2                             145 B          74.2 kB
└ ○ /products2/pants2                      145 B          74.2 kB
+ First Load JS shared by all              74.1 kB               
  ├ chunks/2443530c-cdafa828f3e7cc6d.js    50.2 kB               
  ├ chunks/961-c842447005b6b281.js         22 kB                 
  ├ chunks/main-app-60791f253988201a.js    215 B                 
  └ chunks/webpack-c3afcc35c2c1b0fe.js     1.68 kB               

Route (pages)                              Size     First Load JS
┌ ○ /404                                   178 B            86 kB
├ ○ /about                                 730 B          86.6 kB
├ ○ /contact                               732 B          86.6 kB
├ ○ /products                              771 B          86.6 kB
└ ○ /products/pants                        777 B          86.6 kB
+ First Load JS shared by all              85.8 kB
  ├ chunks/main-234c960905503371.js        84 kB
  ├ chunks/pages/_app-c544d6df833bfd4a.js  192 B
  └ chunks/webpack-c3afcc35c2c1b0fe.js     1.68 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)
```
-> app 폴더와 pages 폴더에 어떤 라우팅이 있는지 확인이 가능(동그라미 표시는 정적 라우팅 표시 서버는 람다기호)   
-> 동그라미는 SSG 라고 이해하면 됌   
-> `npm run start`  로 실행을 해보면, 훨씬 빠르게 동작하는 부분 확인이 가능 왜? -> 이미 만들어진 HTML을 내려받아서 렌더링 해주기때문

---
### 동적 라우팅

- 상품 상세를 생각해보자.(상품 상세별로 이미지 바뀌고, 설명 바뀌고, 가격 바뀌고)
- app 경로내에 대괄호 [] 를 해주고 작성하면 됨
```
// app/products2/[slug]/page.tsx

interface Props {
    params: {
        slug: string;
    }
}
export default function ProductsDetail(props: Props) {
    const {params} = props;
    return <h1>{params.slug} 나는 상품 상세!</h1>
}
```
-> 빌드를 해서 확인해보자.   

```
λ /products2/[slug]                      149 B          74.3 kB
```
-> 람다 마크면 서버사이드 렌더링이 된다는 의미다.

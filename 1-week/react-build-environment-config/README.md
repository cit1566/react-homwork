# 리액트 빌드 환경 구성 연습

직접 Bun 리엑트 개발 환경을 구성 및 템플릿 제작.
Bun 올인원 런타임을 사용해 리액트를 빌드할 수 있는 환경을 구성합니다.

## VSCode 인텔리센스

- jsconfig.json 파일 생성
  | 옵션 | 설명 |
  | --- | ----------------------------------------- |
  | jsx | JSX 문법을 리액트 방식으로 인식 |
  | checkJs | JavaScript 파일도 타입 체크 활성화 |
  | target | 최신 JavaScript 문법 지원 |
  | module | 최신 ESM 모듈 방식 지원 |
  | moduleResolution | `node` 방식으로 모듈 경로 인식 |
  | include | `src` 폴더 안의 모든 파일 포함 |
  | exclude | 불필요한 폴더 제외 (`node_modules`, `dist`) |

## Prettier setting

```bash
bun add -d prettier
```
- 프리티어 설치

- `.prettier.js` 파일 구성
```js
// .prettierrc.js
module.exports = {
  printWidth: 80,              // 한 줄 최대 길이
  singleQuote: true,           // 문자열 작은 따옴표
  semi: false,                 // 세미콜론 없음
  useTabs: false,              // 스페이스 사용
  tabWidth: 2,                 // 들여쓰기 2칸
  trailingComma: 'es5',        // 끝 콤마 ES5 스타일
  arrowParens: 'always',       // 화살표 함수 괄호 항상
  proseWrap: 'preserve',       // 마크다운 줄바꿈 보존
  quoteProps: 'consistent',    // 객체 속성 따옴표 일관되게
  bracketSameLine: false,      // JSX 닫는 괄호 줄바꿈
  bracketSpacing: true,        // 중괄호 안 공백
  htmlWhitespaceSensitivity: 'css', // HTML 공백 → CSS 규칙
  objectWrap: 'preserve'       // 객체 줄바꿈 원본 유지
}
```

## import 정렬 설정
```bash
bun add -d @trivago/prettier-plugin-sort-imports
```
- `prettier-plugin-sort-import` 플러그인 설치

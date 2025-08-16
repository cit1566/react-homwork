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
{
  "printWidth": 80,
  "singleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "arrowParens": "always",
  "proseWrap": "preserve",
  "quoteProps": "consistent",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "importOrder": ["^react", "^[a-zA-Z]", "^@/(.*)$", "^\\.(?!.*\\.css$).*", "\\.css$"],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true
}

```

## import 정렬 설정

```bash
bun add -d @trivago/prettier-plugin-sort-imports
```

- `prettier-plugin-sort-import` 플러그인 설치

## `.vscode` & `setting.json`

- 확장프로그램 설치 및 setting.json 설정

## ESLint 설치

```
bun add -d eslint @eslint/js globals eslint-plugin-react eslint-plugin-prettier
```

`bun add -d` : `devDependencies` 설치
`eslint` : `eslint` 설치
`@eslint/js` : ESlint에서 최신 JavaScript 문접을 지원하도록 기본 패키치 설치
`globals` : 전역 객체를 ESLint가 인식하도록 도와주는 패키지
`eslint-plugin-react` : React 프로젝트에서 JSX 문법, React 규칙을 검사할 수 있는 ESLint 플러그인
`eslint-plugin-prettier` : Prettier와 ESLint를 연동해, 코드 스타일을 ESLint 규칙으로도 체크할 수 있게 하는 플러그인

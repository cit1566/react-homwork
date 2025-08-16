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

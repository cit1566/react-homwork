// import uploadBtn from '../components/uplode-button/uploadBtn'

export default function uploadBtnTypeFunc(label) {
  switch (label) {
    case 'check-mark':
      return '완료'
    case 'cross':
      return '실패'
    case 'not-allowed':
    case 'up-arrow':
      return '업로드'
    case 'spinner':
      return '업로드 중'
  }
}

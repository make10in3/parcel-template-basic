// ESM - browser       에크마 스크립트 모듈방식
// CommonJS - nodejs 기반에서 

// import autoprefixer form 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//      plugins: [
//          autoprefixer
//      ]   
//}
module.exports = {
    plugins: [
        autoprefixer
    ]
}


// module.exports = {
//     plugins: [
//         require('autoprefixer')
//     ]
// }

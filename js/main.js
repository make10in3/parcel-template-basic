console.log('hello parcel!!')

// 비동기 함수
async function test() {
    const promise = Promise.resolve(123)
    console.log(await promise) // await 를 키워드를 사용해서 무언가를 기다림
} 

test()
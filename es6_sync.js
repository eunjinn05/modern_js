
 /** =======================================
 *
 * Sync;
 * 
 * ========================================*/
// function work () {
//     const start = Date.now();
//     for (let i=0; i<100000000; i++) {

//     }
//     const end = Date.now();
//     console.log(end - start+'ms');
// }
// work();
// console.log('Next');

 /** =======================================
 *
 * Promise;
 * 
 * ========================================*/

 // resolve로 성공 시킨 상태
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// myPromise.then(n => {       // mypromise 실행 후 작업되도록 then 부름 (callback 함수)
//     console.log(n);
// });

// =============================================

//  reject 잡기
//  const myPromiseReject = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error());
//     },1000);
//  });

//  myPromiseReject.then(n => {
//      console.log(n);
//  }).catch(error => {
//      console.log('에러임');
//  })

// =============================================

// function increaseAndPrint (n) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if (value == 5) {
//                 const error = new Error();
//                 error.name = 'valueError';
//                 reject(error);
//                 return;
//             }
//             console.log(value);
//             resolve(value);
//         }, 1000);
//     })
// }

// increaseAndPrint(0).then((n) => {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).then((n)=> {
//     return increaseAndPrint(n);
// }).catch((e) => {
//     console.error(e);
// });

// ------------------------------------------------

// function sleep (ms) {
//     return new Promise (resolve => setTimeout(resolve, ms));
// }

// async function progress () {
//     console.log('Hi');
//     await sleep(3000);
//     console.log('Nice to meet you');
// }

// progress().then(() =>{
//     console.log('All done');
// });

// ---------------------------------------------------


// async : await/promise 쓸 함수에 걸어놓음
// await 붙이고 promise 붙여 사용함

function sleep (ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

const Dog = async () => {
    await sleep(1000);
    return 'Dog';
};

const getRabbit = async () => {
    await sleep(500);
    return 'Get Rabbit';
}

const getTurtle = async () => {
    await sleep(3000);
    return 'Get Turtle'; 
}

async function getAnimals()  {
    let dog = await Dog();
    console.log(dog);
    
    let turtle = await getTurtle();
    console.log(turtle);

    let rabbit = await getRabbit();
    console.log(rabbit);
    
}

getAnimals();
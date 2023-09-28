// Promise의 특성,  한 상태로 결정이 되면 끝임
// reject : error 즉, catch를 탐
// resolve : then 함수의 callback 함수를 부름

// 1. resolve가 먼저인 경우 ->  then() 만 탐
// 2, reject가 먼저인 경우 -> catch() 만 탐
//그러나 그 뒤로도 javascrtip 작업됨

// new Promise ((resolve, reject) => {
//     reject(new Error('value Data'));
//     resolve('resolve value Data');
// }).catch ((error) => {
//     console.log('error', error);
// }).then((value) => {
//     console.log('After ABC');
//     console.log(value);
// });


// function reutrnPromoiseSettime () {
//     return new Promise(resolve =>  {
//         setTimeout(() => {
//             resolve(Math.random());
//         }, 1000);
//     });
// }

// reutrnPromoiseSettime().then((value) => {
//     console.log(value);
//     return reutrnPromoiseSettime()
// }).then((value)=> {
//     console.log(value);
//     return reutrnPromoiseSettime()
// }).then((value)=> {
//     console.log(value);
//     return reutrnPromoiseSettime()
// }).then((value)=> {
//     console.log(value);
//     return reutrnPromoiseSettime()
// }).then((value)=> {
//     console.log(value);
//     return reutrnPromoiseSettime()
// });

// async function 안에 promise, async function 안에 await


/** =======================================
 *
 * forEach();
 * 
 * ========================================*/

 const foreachArr = ['one', 'two', 'three'];
 
 foreachArr.forEach( num => { // arr 안의 원소들을 num이라는 변수명으로 빼서 사용
    // console.log(num);
 });

 /** =======================================
 *
 * map();
 * 
 * ========================================*/

 const mapArray = [1, 2, 3];

 const square = n => n * n;     // 화살표 함수 만들어 변수화 한 것
 let squared = mapArray.map(square);
 squared = mapArray.map(n => n * n);    // 위와 같은 결과 
//  console.log(squared);

 /** =======================================
 *
 * indexOf();
 * 
 * ========================================*/

 const arr = [1, 2, 3, 4, 5];
 let index = arr.indexOf(1);
//  console.log(index);


 /** =======================================
 *
 * findIndex();
 * 
 * ========================================*/

 const arrIndexOf = [
     {
         id : 1,
         name : '강아지'
     },
     {
        id : 2,
        name : '고양이'
    },
    {
        id : 3,
        name : '곰'
    }
 ];

const idx = arrIndexOf.findIndex( arr => arr.id == 3);
// console.log(idx);

const arrIndexOf2 = [1,2,3,4,5];
const idx2 = arrIndexOf2.findIndex(arr2 => arr2 == 3);
// console.log(idx2);

 /** =======================================
 *
 * find();
 * 
 * ========================================*/

const arrFind = [
    {
        id : 1,
        name : '시계'
    },
    {
        id : 2,
        name : '가방'
    },
    {
        id : 3,
        name : '신발'
    }
];
const objFind = arrFind.find( arr => arr.id == 1);
// console.log(objFind);

 /** =======================================
 *
 * filter();
 * 
 * ========================================*/

 const arrFilter = [
    {
        id : 1,
        type : '사탕',
        name : '츄파츕스'
    },
    {
        id : 2,
        type : '초콜릿',
        name : '가나'
    },
    {
        id : 3,
        type : '사탕',
        name : '페인트 사탕'
    }
 ];

 const filterObj = arrFilter.filter( arr => arr.type == '사탕');
//  console.log(filterObj);

 /** =======================================
 *
 * splice();
 * 
 * ========================================*/

 const splice_arr = [10,20,30];
 const arr_idx = splice_arr.indexOf(20);
//  console.log(arr_idx);
 splice_arr.splice(arr_idx, 1);
//  console.log(splice_arr);

 /** =======================================
 *
 * shift(), pop();
 * 
 * ========================================*/
const shift_pop_arr = [1, 2, 3, 4, 5];
// console.log(shift_pop_arr.shift());
// console.log(shift_pop_arr.shift());

// console.log(shift_pop_arr.pop());
// console.log(shift_pop_arr);

 /** =======================================
 *
 * unshift();
 * 
 * ========================================*/

 const unshift_arr = [1,2,3,4,5];
 unshift_arr.unshift(5);
//  console.log(unshift_arr);

 /** =======================================
 *
 * concat();
 * 
 * ========================================*/

 const concat1_arr = [1, 2, 3];
 const concat2_arr = [1, 2, 3];
//  console.log(concat1_arr.concat(concat2_arr));
 
 /** =======================================
 *
 * join();
 * 
 * ========================================*/
const join_arr = [1, 2, 3];
// console.log(join_arr.join('|'));

 /** =======================================
 *
 * reduce();
 * 
 * ========================================*/

const reduce_arr = [1,2,3,4,5];
let sum = reduce_arr.reduce((ac, current) => {
    // console.log(ac, current);
    return ac + current;
}, 0);

let avg = 0;
let average = reduce_arr.reduce((ac, current, index, array) => {
    if (index == array.length-1) {
        avg = (ac + current) / array.length;
    } else {
        return ac + current;
    }
}, 0);
// console.log(avg);

 /** =======================================
 *
 * rest();
 * 
 * ========================================*/
 function sumrest (...rest) {
     return rest;
 }
 const result = sumrest(1,2,3,4,5);
//  console.log(result);  // make array

 function sumreduce (...rest) {
    return rest.reduce((acc, current) => {
        return acc + current;
    },0);
 }
const sumreducereturn = sumreduce(1,2,3,4,5);
console.log(sumreducereturn);

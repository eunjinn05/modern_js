
// https://learnjs.vlpt.us/

/** =====================
 * // ES6 Object 변수화;
 ========================*/

const object = {a:1, b:2};
// console.log(object);  // {a:1, b:2}

const {a, b} = object;    //해당 방식으로 object의 변수 꺼내올수있음
// console.log(a);     // 1  ===  console.log(object.a);
// console.log(b);     // 2  ===  console.log(object.b);

const {c, d} = object;
// console.log(c);     //undefined ===  console.log(object.c);
// console.log(d);     //undefined ===  console.log(object.d);

const animal = {
    name: '멍멍이',
    type: '개'
  };
  
const { name: nickname } = animal;  // name -> nickname 으로 obj key 값 변경
//console.log(nickname);


/** =====================
 * // ES6 spread things;
 ========================*/

const arrData = [1,2,3];
const arrAddData = [5,6];

const sumData = [... arrData, ... arrAddData];    // [1,2,3,5,6]
// sumData = [arrData, arrAddData];      // [[1,2,3], [5,6]]
// console.log(sumData);

const slime = {
    name: '슬라임'
};
const cuteSlime = {
    ...slime,
    attribute: 'cute'
};
//console.log(cuteSlime);   // {name : '슬라임', attricute : 'cute'}

// Rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...rest } = purpleCuteSlime;
  console.log(color);  // purple
  console.log(rest);    // {name : '슬라임', attribute : 'cute'}



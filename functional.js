const people = [
  {
    age: 20,
    city: '서울',
    pet: ['dog', 'cat']
  },
  {
    age: 40,
    city: '부산'
  },
  {
    age: 31,
    city: '대구',
    pet: ['dog', 'cat']
  },
  {
    age: 36,
    city: '서울'
  },
  {
    age: 27,
    city: '부산',
    pet: 'cat'
  },
  {
    age: 24,
    city: '서울',
    pet: 'dog' 
  }
];

/**
 * 다음 문제를 풀어봅시다.
 * 
 * A. 30대 미만이 한 명이라도 살고있는 도시
 * B. 각 도시 별로 개와 고양이를 키우는 사람의 수
 */

 function probA () {
   const cities = [];

    for (const person of people) {
      if (person.age < 30) {
        if (!cities.find((city) => person.city == city)){
          cities.push(person.city);
        }
      }
    }
    return cities;
 }


function probAModern () {
  const cities = people.filter((person) => person.age < 30).map((person) => person.city);
  return cities;
}

// const cityData =  probAModern();
// console.log(cityData);


function probB () {
  for (const person of people) {
    const {city, pet : petOrPets} = person;
    console.log(city);
    // console.log(pet);
    console.log(petOrPets);
  }
}

const cityData =  probB();
console.log(cityData);
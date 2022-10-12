import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faHeadset,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function InfoBlock() {
  return (
    <div className="h-full container">
      <div className="h-full grid grid-cols-1 md:grid-cols-3 justify-items-center w-[60%] md:w-full mx-auto md:divide-solid md:divide-x">
        <div className="h-full w-full flex items-center justify-start mb-8 md:mr-4 md:w-[90%]">
          <section className="flex justify-start items-center">
            <FontAwesomeIcon
              className="h-14 text-accent-color"
              icon={faTruck}
            />
            <div className="ml-4">
              <h5 className="font-bold uppercase">free shipping</h5>
              <p className="text-[#555] mb-0">On all orders of $150</p>
            </div>
          </section>
        </div>
        <div className="h-full w-full flex items-center justify-start mb-8 md:mr-4 md:w-[90%]">
          <section className="flex justify-start items-center md:ml-4">
            <FontAwesomeIcon
              className="h-16 text-accent-color"
              icon={faHeadset}
            />
            <div className="ml-4">
              <h5 className="font-bold uppercase">24/7 support</h5>
              <p className="text-[#555] mb-0">Get help when you need it</p>
            </div>
          </section>
        </div>
        <div className="h-full w-full flex items-center justify-start mb-8 md:mr-4 md:w-[90%]">
          <section className="flex justify-start items-center md:ml-4">
            <FontAwesomeIcon
              className="h-16 text-accent-color"
              icon={faRotateLeft}
            />
            <div className="ml-4">
              <h5 className="font-bold uppercase">100% money back</h5>
              <p className="text-[#555] mb-0">30 day money back guarantee</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Napisz funkcję, która przyjmuje jako argument tablicę liczb całkowitych
// i jako wynik zwraca sumę dwóch największych liczb w tej tablicy.

// Przykład:
// sum2max([1, 3, 2]) -> 5
// sum2max([1, 3, 3, -1]) -> 6
// sum2max([0, -1, -2]) -> -1
// sum2max([1]) -> null // brak dwóch liczb
// sum2max([]) -> null // brak dwóch liczb

// Nagłówki funkcji:

// function sum2max(numbers) {
//   console.log(numbers.length > 1 ? true : false);
//   if (numbers.length > 1) {
//     let largest = numbers[0];
//     let large;
//     for (let i = 1; i < numbers.length; ++i) {
//       if (numbers[i] > largest) {
//         large = largest;
//         largest = numbers[i];
//       } else if (numbers[i] > large || typeof large === `undefined`) {
//         large = numbers[i];
//       }
//     }
//     return large + largest;
//   } else {
//     return null;
//   }
// }

// console.log(sum2max([1, 3, 2]));
// console.log(sum2max([1, 3, 3, -1]));
// console.log(sum2max([0, -1, -2]));
// console.log(sum2max([0, -1]));
// console.log(sum2max([1]));
// console.log(sum2max([]));
// function exampleSolution(numbers: number[]): number | null {
//   if (numbers.length < 2) return null;

//   return [...numbers]
//     .sort((a, b) => a - b)
//     .slice(-2)
//     .reduce((c, p) => c + p, 0);
// }

// [
//   [[2, 1, 3], 5],
//   [[1, 3, 3, 1], 6],
//   [[], null],
//   [[1], null],
//   [[0, -2], -2],
//   [[0, -1, -2], -1],
// ].forEach(([input, expect]) => {
//   console.log(exampleSolution(input) === expect);
// });

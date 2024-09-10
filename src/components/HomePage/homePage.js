import React from 'react';
import './homePage.css';
import Banner from './banner.js'

function hello1(){
  let arr = [2,4,3]
  let counter = [0]

  for(let i = 1; i < arr.length; i ++) {
    let num =0
    let sum = 0;
   for(let j = 0; j < i; j++) {
    let ele = arr[i]-arr[j];
    sum += ele;
   }
   counter.push(sum);
  }
console.log(counter)
}
function hello2(){
  function findMinimumMoves(word) {
    const charCount = {};  // Use a plain object to count occurrences of each character
    let moves = 0;

    // Count occurrences of each character
    for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1; // if undef == 0 + 1 
    }

    // Calculate moves based on character counts
    for (const count of Object.values(charCount)) {
        if (count > 1) {
            moves += Math.floor(count / 2);  // Integer division to get the number of pairs
        }
    }

    return moves;
}

// Example usage
const word = "baabacaa";
console.log("Minimum number of moves:", findMinimumMoves(word));  // Output should be 3
}

function hello3(){
  function findStock(arr, div){
    let count = 0;
    for (let i =0; i < arr.length -2; i++){
      for (let j =i+1; j < arr.length-1; j++) {
        for (let k= j+1; k < arr.length; k++) {
          // if(arr[k] > arr[j] && arr[j] > arr[i]){

            let sum = arr[k] + arr[j] + arr[i] 
            if(sum % 5 === 0){
              count++
            }
            
          // }
        }
      }
    }
    console.log(count)
  }
  findStock([3,3,4,7,8], 5)
}

function hello4(){
  function latestRequest(arr, k){
    if(arr.length === k){
      console.log(arr)
      return
    }
    let distinct = {}
    let answer = []
    for (let i = arr.length-1; i > -1; i--  ){
      if( !distinct[arr[i]] ) {
        distinct[arr[i]]= true;
        answer.push(arr[i])
      }
      if(answer.length === k){
        break;
      }
    }

  }
  latestRequest(['item4','item1','item3','item1','item3'],3)
}
function hello5(){
  function priceCheck(products, productsPrice, productSold, soldPrice){
    let productsMap = {}
    let productSoldMap={}
    let errorCount = 0
    for (let i in productsPrice){
      productsMap[products[i]]= productsPrice[i]
    }
    for (let i in productSold){
     if (productsMap[productSold[i]] !== soldPrice[i]){
      console.log('i: -> ',i)
      errorCount++;
     }else{
     }
    }
    console.log(errorCount)
  }

  let products = ["eggs", "milk", "cheese"];
  let productsPrice = [2.89, 3.29, 5.79]
  let productsSold = ["eggs", "eggs", "cheese", "milk"]
  let soldPrice=[2.89, 2.99, 5.97, 3.29]
  priceCheck(products, productsPrice, productsSold, soldPrice)
}
function hello6(){
  function sortedSquaredArray() {
    let array=[-5, -4, -3, -2, -1];
    // Write your code here.
    let newArr=[]  
    for (let i =0; i< array.length; i++){
          newArr.push(array[i]**2)
      }
    console.log(newArr.length)
    let sortedArr;
    debugger;
    do{
      sortedArr=false
      for(let i = 0 ; i< newArr.length; i++){
        if(newArr[i+1] < newArr[i]){
          let temp = newArr[i+1]
          newArr[i+1]=newArr[i]
          newArr[i]=temp;
          sortedArr=true
        }
      }
    }while(sortedArr)
      console.log(newArr)
    return newArr;
  }
  // sortedSquaredArray()
}
function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort( (a,b)=>a-b)
  console.log(array, 'arrayleng: ', array.length)
  if(array.length < 3){
    return []
  }

  let answer=[]
  for(let i = 0; i<array.length -2;i++){
   for(let j = i+1; j<array.length -1;j++){
    for(let k = j+1; k<array.length ;k++){
      // debugger
     if(array[i] + array[j] + array[k] === targetSum){
       answer.push([array[i], array[j], array[k]])
     }
   }
  }
}

console.log(answer)
}
// threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0)

function moveElementToEnd(array, toMove) {
  // Write your code here.
  if (array.length === 0){
    return []
  }
  let i = 0, j = array.length-1;
  // debugger
  while(i < j && j>i){
    if(array[i] === toMove){
      if(array[j] === toMove){
        j--;
        continue
      }else {
        let temp = array[j];
        array[j]= toMove;
        array[i] = temp;
        j--
        i++
        continue
      }
      
    }else {
      i++

    }
      
    
  }
  return array
}

// moveElementToEnd([2,1,2,2,2,3,4,2],2)

function IBMcoding(){
  let arr= [25,10,20]
  let sum = []
  
 while(arr.length > 1){
  arr.sort((a,b)=>a-b)
  let middle = Math.floor(arr.length/2)
  sum.push(arr[0] + arr[middle])

  arr.splice(0,1,sum[sum.length-1])
  arr.splice(middle,1)



  }
  let total = 0;
  for(let i in sum){
    total = total + sum[i]
  }
  console.log(total)
  return total

}
// IBMcoding(25,10,20);

function findOptimalResources(arr, k) {
  const n = arr.length;

  if (n < k) return -1; // Not enough elements for the subarray

  let maxSum = -1;
  let currentSum = 0;
  let elementCount = {}; // Object to keep track of element counts
  let left = 0;
debugger
  for (let right = 0; right < n; right++) {
      // Add the new element to the current window
      if (elementCount[arr[right]] !== undefined) {
          elementCount[arr[right]] += 1;
      } else {
          elementCount[arr[right]] = 1;
      }
      currentSum += arr[right];

      // Remove elements from the left if needed to maintain uniqueness
      while (elementCount[arr[right]] > 1) {
          elementCount[arr[left]] -= 1;
          currentSum -= arr[left];
          left++;
      }

      // Check if the window has reached size k
      if (right - left + 1 === k) {
          // All elements are unique
          if (Object.keys(elementCount).length === k) {
              maxSum = Math.max(maxSum, currentSum);
          }
          // Remove the element going out of the window
          elementCount[arr[left]] -= 1;
          currentSum -= arr[left];
          left++;
      }
  }

  return maxSum === -1 ? -1 : maxSum;
}

// Test the function with the provided example
const arr = [1, 2, 7, 7, 4, 3, 6];
const k = 3;
console.log(findOptimalResources(arr, k));

const HomePage = () => {
  return (
    <div className = "homepage">
      {/* {hello()} */}
      <Banner/>
    </div>
  );
};

export default HomePage;

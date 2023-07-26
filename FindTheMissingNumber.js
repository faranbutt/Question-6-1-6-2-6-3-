//Question 6-2: Let's say we have an array of first 45 numbers with one missing number. Need to find a missing integer from the list
// (JavaScript)
const first45Numbers = [1, 5, 6, 7, 8,9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21, 22, 23, 24, 25, 26, 27, 28,29,30, 31, 32, 33,34, 35, 36, 37, 38, 39, 40,41, 42,43,44,45];

const first45length = first45Numbers.length
const missingNumbers  = 45 - first45length;
if(missingNumbers>0){

    const minValue = 1;
    const maxValue = 45;
    const allNumbers = Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);
    const missingNumbersArray = allNumbers.filter(num => !first45Numbers.includes(num));
    console.log("Missing numbers:", missingNumbersArray);
    
}
else{
    console.log("No Missing Numbers")
}
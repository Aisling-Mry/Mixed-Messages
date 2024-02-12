
repsExercises = ["squats", "lunges", "push ups", "donkey-kicks", "crunches", "world's greatest stretch"];

timedExercises = ["jumping jacks", "jog on the spot", "plank", "squat hold"]

let generateRepIndex = () => {
    index = Math.floor(Math.random() * repsExercises.length);
    return index
}

let repsGenerator = () => {
    let exercise1 = repsExercises[generateRepIndex()];
    console.log(exercise1);
    let exercise2 = repsExercises[generateRepIndex()];
      while (exercise1 === exercise2) {
        exercise2 = repsExercises[generateRepIndex()]
        } 
      console.log(exercise2);
    return [exercise1, exercise2]  
   }
    

console.log(repsGenerator()[0])
// Your circuit this week is __ reps of ____, __ reps of ____, and __ minutes of _____.
// function 1 - output 2 non-identical reps exercises 
// function 2 - output message calling function and implementing randon num gens.

repsExercises = ["squats", "lunges", "push ups", "donkey-kicks", "crunches", "world's greatest stretch"];

TimedExercises = ["jumping jacks", "jog on the spot", "plank", "squat hold"]

let repsGenerator = () => {
    let i = Math.floor(Math.random() * repsExercises.length);
    console.log(i)
    let exercise1 = repsExercises[i];
    return exercise1
}

console.log(repsGenerator())
// Your circuit this week is __ reps of ____, __ reps of ____, and __ minutes of _____.
// function 1 - output 2 non-identical reps exercises 
// function 2 - output message calling function and implementing randon num gens.
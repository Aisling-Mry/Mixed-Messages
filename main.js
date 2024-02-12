
repsExercises = ["squats", "lunges", "push ups", "donkey-kicks", "crunches", "world's greatest stretch"];

timedExercises = ["jumping jacks", "jog on the spot", "plank", "squat hold"]

let generateRepIndex = () => {
    const index = Math.floor(Math.random() * repsExercises.length);
    return index
}

let repsGenerator = () => {
    const exercise1 = repsExercises[generateRepIndex()];
    let exercise2 = repsExercises[generateRepIndex()];
        while (exercise1 === exercise2) {
        exercise2 = repsExercises[generateRepIndex()];
        }
    return [exercise1, exercise2]  
   }


function weeklyCircuit() {
    let repCounter = () => Math.floor(Math.random() * 21);
    let minuteCounter = () => Math.floor(Math.random() * 3 + 1);
    let timedExerciseIndex = Math.floor(Math.random() * timedExercises.length);
    let timedExercise = timedExercises[timedExerciseIndex];
    let repExercises = repsGenerator()
    console.log(`Your circuit this week is ${repCounter()} reps of ${repExercises[0]}, ${repCounter()} reps of ${repExercises[1]} and ${minuteCounter()} minute(s) of ${timedExercise}.`)
}

weeklyCircuit()

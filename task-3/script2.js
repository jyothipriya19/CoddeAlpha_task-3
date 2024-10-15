// Initialize workout data
let workouts = [];

// Set fitness goal
function setGoal() {
  const goal = document.getElementById('fitnessGoal').value;
  document.getElementById('currentGoal').textContent = `Current Goal: ${goal}`;
  document.getElementById('fitnessGoal').value = '';
}

// Record workout
function recordWorkout() {
  const workoutType = document.getElementById('workoutType').value;
  const workoutDuration = document.getElementById('workoutDuration').value;
  const workoutDate = document.getElementById('workoutDate').value;

  if (workoutType && workoutDuration && workoutDate) {
    const workout = {
      type: workoutType,
      duration: workoutDuration,
      date: workoutDate,
    };

    workouts.push(workout);

    // Update workout list
    updateWorkoutList();

    // Clear inputs
    document.getElementById('workoutType').value = '';
    document.getElementById('workoutDuration').value = '';
    document.getElementById('workoutDate').value = '';
  } else {
    alert('Please fill in all workout details.');
  }
}

// Update the displayed workout list
function updateWorkoutList() {
  const workoutList = document.getElementById('workoutList');
  workoutList.innerHTML = '';

  workouts.forEach((workout, index) => {
    const workoutItem = document.createElement('li');
    workoutItem.textContent = `${workout.type} - ${workout.duration} mins on ${workout.date}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.onclick = () => deleteWorkout(index);
    workoutItem.appendChild(deleteButton);
    workoutList.appendChild(workoutItem);
  });
}

// Delete workout
function deleteWorkout(index) {
  workouts.splice(index, 1);
  updateWorkoutList();
}

// View progress (total workouts and duration)
function viewProgress() {
  const progressDiv = document.getElementById('progress');
  const totalWorkouts = workouts.length;
  const totalDuration = workouts.reduce((total, workout) => total + Number(workout.duration), 0);

  progressDiv.innerHTML = `
    <p>Total Workouts: ${totalWorkouts}</p>
    <p>Total Duration: ${totalDuration} mins</p>
    `;
}
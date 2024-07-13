import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep going!",
  "You can do it!",
  "Stay positive!",
  "Believe in yourself!",
];

function TaskGenerator() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };

  const handleCompleteTask = () => {
    tasks[currentTaskIndex].isCompleted = true;
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };

  const currentTask = tasks[currentTaskIndex];
  const motivationalMessage = motivationalMessages[currentTaskIndex % motivationalMessages.length];

  return (
    <div>
      <FancyText title text="Your Task" />
      <p>{currentTask.name}</p>
      <p>Status: {currentTask.isCompleted ? "Completed ✔" : "Pending"}</p>
      <button onClick={handleCompleteTask}>Complete Task</button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText text={motivationalMessage} />
    </div>
  );
}

export default TaskGenerator;
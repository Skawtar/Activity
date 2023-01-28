import React, { useState } from "react";
import Styles  from './ToDo.module.css'

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  const onCheck = index => {
    let newActivities = [...activities];
    newActivities[index].isCompleted = !newActivities[index].isCompleted;
    setActivities(newActivities);
  };

  const addNewActivity = () => {
    setActivities([...activities, { name: newActivity, isCompleted: false }]);
    setNewActivity("");
  };

  return (
    <div>
      <h2>Activities for Today</h2>
      <input className={Styles.input}
        type="text"
        placeholder="Enter new activity"
        value={newActivity}
        onChange={e => setNewActivity(e.target.value)}
      />
      <button onClick={addNewActivity}>Add</button>
      <ul>
        {activities.map((activity, index) => (
          activity.isCompleted ? null : (
            <li key={index}>
              <input className={Styles.check}
                type="checkbox"
                onChange={() => onCheck(index)}
              />
              {activity.name} 
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;

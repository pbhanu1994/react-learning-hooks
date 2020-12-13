import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Activity from './Activity';
import AddActivity from './AddActivity';

const Workouts = () => {
    const allActivities = useSelector(state => state.activities);
    console.log('allActivities', allActivities);
    const [toggleAddActivity, setToggleAddActivity] = useState(false);

    return (
        <div className="workouts-wrapper">
            <h1>My Workouts</h1>
            <button onClick={() => setToggleAddActivity(!toggleAddActivity)}>Add Activity</button>
            {toggleAddActivity && <AddActivity /> }
            {allActivities.map(activity => {
                return <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration} />
            })}
        </div>
    )
}

export default Workouts;
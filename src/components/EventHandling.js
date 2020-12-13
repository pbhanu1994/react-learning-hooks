import React, {useState} from 'react';

const EventHandling = () => {
    const [times, setTimes] = useState(0);
    
    const handleClick = () => {
        setTimes(times + 1);
    }

    return(
        <>
            <h1>Clicked here {times} times</h1>
            <button onClick={handleClick}>Click here</button>
        </>
    )
}

export default EventHandling;
import React, {useRef, useState } from 'react';

export function Create(){
  const inputNameRef = useRef(null);
  const inputMuscleRef = useRef(null);
  const inputSetsRef = useRef(null);
  const inputRepsRef = useRef(null);
  const inputDesRef = useRef(null);
 

  const [addedName, setName] = useState('');
  const [addedMuscle, setMuscle] = useState('');
  const [addedsets, setSets] = useState('');
  const [addedReps, setReps] = useState('');
  const [addedDes, setDes] = useState('');

  const handleAdd = () => {
    // console.log(inputNameRef.current.value)
    // console.log(inputMuscleRef.current.value)
    // setName(inputNameRef.current.value);
    
    fetch('/newWorkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputNameRef.current.value,
        muscle: inputMuscleRef.current.value,
        sets: inputSetsRef.current.value,
        reps: inputRepsRef.current.value,
        description: inputDesRef.current.value,
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }
  const inputDeleteNameRef = useRef(null);
  // const [deletedName, setDeletedName] = useState('');
  const handleDelete = () => {
    console.log(inputDeleteNameRef.current.value)
    fetch('/deleteOne', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputDeleteNameRef.current.value
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="top">
        <input placeholder="Name (Required)" ref={inputNameRef}></input>
        <input placeholder="Muscle (Required)" ref={inputMuscleRef}></input>
        <input placeholder="Sets:" ref={inputSetsRef}></input>
        <input placeholder="Reps:" ref={inputRepsRef}></input>
        <input placeholder="Description:" ref={inputDesRef} className='des'></input>
        <button onClick={handleAdd} className='button'>Add</button>
      </div>
      <div className="top">
        <input placeholder="Name (Required)" ref={inputDeleteNameRef}></input>
        <button onClick={handleDelete}>Delete</button>
      </div> 
    </div>
  )
};

// type="text"
// id="message"
// name="message"


import React, {useRef, useState } from 'react';
import { MyCard } from "./mycards"
export function GetAll() {
  const [allWorkouts, setAllWorkouts] = useState([])
  const getAll = () => {
    fetch('/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setAllWorkouts(data)
      })
      .catch(err => console.log(err))
  }

  const Arr =[];
  for (let i = 0; i < allWorkouts.length; i++){
    Arr.push(
      <MyCard prop={allWorkouts[i]}/>
    )
  };



  return (
    <div>
      <button onClick={getAll} className='lonely-button' >My Workouts</button>
      <p className='things'>{Arr}</p>
    </div>
  )
};
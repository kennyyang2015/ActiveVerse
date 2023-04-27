import { useState } from 'react';
import React from 'react';
import Select from 'react-select';
import { Card } from "./card"

export function Get(){
  const [display, setDisplay] = useState([])
  const nameArr =[];
  for (let i = 0; i < display.length; i++){
    nameArr.push(
      <Card prop={display[i]}/>

    )
  }
  const options = [
    {value: '', label: ''},
    {value: 'abdominals', label: 'Abdominals'},
    {value: 'abductors', label: 'Abductors'},
    {value: 'adductors', label: 'Adductors'},
    {value: 'biceps', label: 'Biceps'},
    {value: 'calves', label: 'Calves'},
    {value: 'chest', label: 'Chest'},
    {value: 'forearms', label: 'Forearms'},
    {value: 'glutes', label: 'Glutes'},
    {value: 'hamstrings', label: 'Hamstrings'},
    {value: 'lats', label: 'Lats'},
    {value: 'lower_back', label: 'Lower back'},
    {value: 'middle_back', label: 'Middle back'},
    {value: 'neck', label: 'Neck'}
  ]
  const handleChange = (selectedOption) => {
    console.log(selectedOption.value)
    fetch('/' + `${selectedOption.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: JSON.stringify({muscle: selectedOption.value})
    })
      .then(res => res.json())
      .then(data => {
        
        setDisplay(data)
      })
      .catch(err => console.log(err))
    
  };
  
  return (
    <div>
      <h2>Choose a Muscle : </h2>
      <Select options ={options} onChange={handleChange}/>
      <p className='things'>{nameArr}</p>
    </div>
  )
};

import React from "react";


export function Card({prop}){

  return(
  
  
    <div className="card">
      <div className="name">
        <p>{(prop.name)}</p>
      </div>
      <div className="bottom">
        <p>Muscle : {(prop.muscle)}</p>
        <p>Difficulty : {(prop.difficulty)}</p>
        <p>Equipment : {(prop.equipment)}</p>
        <p>Instruction : {(prop.instructions)}</p>

        </div>
    </div>
  
  )
}

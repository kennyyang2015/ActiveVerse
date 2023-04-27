import React from "react";


export function MyCard({prop}){

  return(
  
  
    <div className="card">
      <div className="name">
        <p>{(prop.name)}</p>
      </div>
      <div className="bottom">
        <p>Muscle : {(prop.muscle)}</p>
        <p>Sets : {(prop.sets)}</p>
        <p>Reps : {(prop.reps)}</p>
        <p>Description : {(prop.description)}</p>

        </div>
    </div>
  
  )
}
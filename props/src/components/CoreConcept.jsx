import React from 'react'


function CoreConcept({img, title, description}) {
  return (
   <li>
    <img src={img} alt="" />
    <h2>{title}</h2>
    <p>{description}</p>
   </li>
  )
}

export default CoreConcept

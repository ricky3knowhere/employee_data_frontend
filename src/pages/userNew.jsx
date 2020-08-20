import React from 'react';

export default function UserNew() {
  function handleClick() {
    console.log('Saving...')
  }
  return (
    <div>
      <input type="text" />
      <button onClick= {handleClick}>Save</button>
    </div>
  )
}
import React from 'react'

function ProfileCard({persons}) {
  return (
      <div className='divv'>
          {persons.map((person,i) => (
              <div key={i} className='div1'>
                  <img src={person.image}  className='imgg'/>
                  <h1>{person.name}</h1>
                  <p>{person.des}</p>
              </div>
          ))}
    </div>
  )
}

export default ProfileCard
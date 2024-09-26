import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    },[])

      
  return (
    <div className='box'>
        {
            friends.map((friend, index) => <Friend key={index} friend={friend}/>)
        }
    </div>
  )
}

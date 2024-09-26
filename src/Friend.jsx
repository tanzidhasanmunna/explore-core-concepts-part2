import './Friend.css'
export default function Friend({friend}) {
    const {name, email} = friend;
  return (
    <div className="inner-box">
    <h2>Friend :{name}</h2>
    <p> Email: {email}</p>
    </div>
  )
}

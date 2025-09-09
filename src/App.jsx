
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
 
  let persons = [
    {
      name: "kasyap",
      image: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg",
      des:"fullstack developer"
    },
    {
     name: "vijay",
      image: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg",
      des:"fullstack developer" 
    },
    {
      name: "ashish",
      image: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg",
      des:"fullstack developer"
    },
    {
      name: "albi",
      image: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg",
      des:"fullstack developer"
    },
    {
      name: "alan",
      image: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg",
      des:"fullstack developer"
    }
]
  return (
    <div>
      <ProfileCard persons={persons} />
   </div>
  )
}

export default App

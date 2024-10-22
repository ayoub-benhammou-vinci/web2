import './App.css'
import UserCard from '../UserCard'

//Création des trois objets de Type UserCard

const userCard1 = {
  name: "Ayoub",
  age: 19, 
  isOnline : true
};

const userCard2 = {
  name: "Maxime",
  age: 22, 
  isOnline : false
};

const userCard3 = {
  name: "Salima",
  age: 34, 
  isOnline : true
}


const App = () => {
  return (
    <div>
        <UserCard name={userCard1.name} age={userCard1.age} isOnline={userCard1.isOnline}/>
        <UserCard name={userCard2.name} age={userCard2.age} isOnline={userCard2.isOnline}/>
        <UserCard name={userCard3.name} age={userCard3.age} isOnline={userCard3.isOnline}/>
    </div>
  )
}

export default App

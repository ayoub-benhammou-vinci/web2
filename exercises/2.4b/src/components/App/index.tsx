import './App.css'
import UserCard from '../UserCard'

//Création des trois objets de Type UserCard

const userCards = [
  {
    name: "Ayoub",
    age: 19, 
    isOnline : true
  },

  {
    name: "Maxime",
    age: 22, 
    isOnline : false
  },

  {
    name: "Salima",
    age: 34, 
    isOnline : true
  }
];


const App = () => {
  return (
    <>
      <h2>Users</h2>
        {userCards.map((userCard) => 
        <UserCard name={userCard.name} age={userCard.age} isOnline={userCard.isOnline}/>
        )};
    </>
  )

    /*
    <div>
        <UserCard name={userCard1.name} age={userCard1.age} isOnline={userCard1.isOnline}/>
        <UserCard name={userCard2.name} age={userCard2.age} isOnline={userCard2.isOnline}/>
        <UserCard name={userCard3.name} age={userCard3.age} isOnline={userCard3.isOnline}/>
    </div>
    */
}

export default App

import Footer from "../Footer";
import Title from "../Title";
import UserCard from "../UserCard";

const App = () => {

  const title = "Welcome to My App";
  
  const usersCards = [
    {
      name: "Alice",
      age: 25,
    },

    {
      name: "Bob",
      age: 30,
    },

    {
      name: "Charlie",
      age: 35,
    },
  ];

  const footerText = "© 2023 My App";

  return (
    <div>
      <Title titleText={title} />
      <UserCard usersCards={usersCards} />
      <Footer footerText={footerText} />
    </div>
  );
};

export default App;

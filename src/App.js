import './App.css';
import UserCard from './components/UserCard';
import UserProfile from './components/UserProfile';


function App() {
  const user = {
    name: 'Roushath Beevi K S',
    designation : 'Software Engineer',
    bio : 'I am an enthusiatic software Engineer. At present, I am focused on  React, a powerful JavaScript library for building user interfaces.'
  }
  return (
    <div className="App">
       <UserProfile
        user={user}
        render={(user) => <UserCard Name={user.name} Designation={user.designation} Avatar={user.avatar} Bio={user.bio}/>}
      />
    </div>
  );
}

export default App;

import Imagecard from './component/Imagecard';
import './App.css';

function App() {
  const userData = [
    { name: "Subhratanu Saha", githubId: "64859956" },
    { name: "Tanima Nag", githubId: "171805697" },
    { name: "Soumyadeep M.", githubId: "221869256" },
    { name: "Sayan Sengupta", githubId: "261204091" },
    { name: "Debayan Roy", githubId: "172286422" }
  ];

  return (
    <div className="App">
      {
        userData.map((user) => (
          <Imagecard
            key={user.githubId}
            name={user.name}
            imgLink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`}
          />
        ))
      }
    </div>
  );
}

export default App;
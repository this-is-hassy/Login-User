import Login from "./components/Login";
import Profile from "./components/Profile";
import  UserContextProvider  from "./context/UserContextProvider";

function App() {
  return (
    <>
    <div className="bg-slate-900 max-h-screen">
      <UserContextProvider>
        <h1 className="font-mono pt-6 text-yellow-50 text-8xl text-center">LogIn via Context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
      </div>
    </>
  );
}
export default App;

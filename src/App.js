import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { userAction } from "./store/userSlice";

function App() {
  // const  = useAppSelector((state)=>state.user)
  const { user } = useAppSelector((state) => state.user);
  const dispatcher = useAppDispatch();

  const userData = useMemo(() => user, [user]);

  const handleData = () => {
    console.log("click");

    dispatcher(userAction.setUser({ name: "kjkdj", city: "sjhd" }));
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>State: {userData.name} </h1>
      <button onClick={handleData}>clik</button>
    </div>
  );
}

export default App;

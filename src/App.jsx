// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Layout from "./layout/Layout";
// import CaricatureGenerator from "./components/CaricatureGenerator.jsx";
import Car from "./components/Car.jsx";
import CaricatureGenerator from "./components/CaricatureGenerator.jsx";


function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  return (
    <>
      {/* {authenticated ? (
        <div className=" h-full w-full">
          <Layout />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Button
            onClick={() => {
              setAuthenticated(true);
            }}
          >
            Login
          </Button>
        </div>
      )} */}
      <Car/>
    </>
  );
}

export default App;

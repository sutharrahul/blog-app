import React from "react";
import { Button } from "./components/ui/button";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className="px-8">
      <Button>hello</Button>
    </div>
  );
}

export default App;

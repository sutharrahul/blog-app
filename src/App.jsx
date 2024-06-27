import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {})
      .finally();
  }, []);

  return (
    <div className="px-8">
      <h1>The blog apps</h1>
    </div>
  );
}

export default App;

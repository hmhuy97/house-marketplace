import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
    console.log(auth.currentUser);
  }, []);
  return user ? (
    <h1>{user.displayName ? user.displayName : "Không có tên"}</h1>
  ) : (
    "Not Logged In"
  );
}

export default Profile;

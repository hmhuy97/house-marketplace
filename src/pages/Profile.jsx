import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">
          My Profile
          <button type="button" className="logOut" onClick={onLogout}>
            Logout
          </button>
        </p>
      </header>
    </div>
  );
}

export default Profile;

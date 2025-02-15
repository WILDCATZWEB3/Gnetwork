"use client";

import { useState } from "react";
import { auth, googleProvider } from "../../lib/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  signInWithPopup 
} from "firebase/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{user ? "Welcome" : "Sign In / Sign Up"}</h1>
      {!user ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      ) : (
        <div>
          <p>Logged in as: {user.displayName || user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
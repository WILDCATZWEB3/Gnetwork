import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">{isSignUp ? "Sign Up" : "Login"}</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mt-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mt-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleAuth}>
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      <p className="mt-4 text-blue-500 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Login" : "New here? Sign Up"}
      </p>
    </div>
  );
}

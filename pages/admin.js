import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async () => {
    if (!title || !content) return;
    await addDoc(collection(db, "posts"), { title, content, author: "Admin" });
    setTitle("");
    setContent("");
    alert("Post added!");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <input className="border p-2 w-full my-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full my-2" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handlePost}>Post</button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">G Learning Network</h1>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 my-2">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <p className="text-gray-500">By {post.author}</p>
        </div>
      ))}
    </div>
  );
}

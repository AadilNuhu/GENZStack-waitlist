import { useEffect, useState } from "react";
import axios from "axios";
interface User {
  _id: string;
  name: string;
  email: string;
  number: string;
  createdAt: string;
}
export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = prompt("Enter admin token:");

    if (!token) {
      setError("No token entered");
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        setUsers(res.data);
      } catch (error: unknown) {
        setError("Failed to fetch users.");
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <p>{error}</p>;
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Waitlist Users
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF17C9" stroke="#FF17C9" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF17C9" stroke="#FF17C9" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF17C9" stroke="#FF17C9" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>}
        {!loading && users.length === 0 && <p>No users found.</p>}
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-gray-200 border border-gray-300  p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-700">{user.name}</h3>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <p className="text-gray-600">{user.number}</p>
            <p className="text-gray-500 text-sm mt-2">
              Joined on: {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

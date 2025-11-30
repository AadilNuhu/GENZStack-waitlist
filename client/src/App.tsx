import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const url = import.meta.env.VITE_API_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, formData);
      console.log(res.data);

      setMessage("Details added successfully ...");

      setTimeout(() => {
        setMessage("");
        window.location.reload();
      }, 3000);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Try again later ...");
      } else {
        setError("Something went wrong. Try again later.");
      }

      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="flex dark:bg-gray-700 justify-center h-screen items-center overflow-x-hidden">
      <div className="text-center dark:bg-gray-800 dark:text-white bg-gray-200 p-10 rounded-2xl w-[400px]">
        <h1 className="font-medium text-xl pb-2">
          <span className="text-purple-400">GENZ</span>Stack is almost here!
        </h1>
        <p className="pb-5">Join the waitlist now.</p>

        <form onSubmit={handleSubmit}>
          {message && (
            <p className="bg-green-500/20 text-md text-green-400 p-2 mb-4 rounded-md">
              {message}
            </p>
          )}

          {error && (
            <p className="bg-red-500/20 text-md text-red-400 p-2 mb-4 rounded-md">
              {error}
            </p>
          )}

          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border p-2 border-gray-500 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full"
            placeholder="Enter your name"
          />

          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="border p-2 border-gray-500 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full"
            placeholder="Enter email"
          />

          <input
            type="text"
            name="number"
            onChange={handleChange}
            className="border p-2 border-gray-500 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full"
            placeholder="Enter Number e.g. +233 123 456 789"
          />

          <button
            type="submit"
            className="bg-purple-400 hover:bg-purple-600 dark:bg-purple-500 cursor-pointer text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
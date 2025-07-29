import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Welcome(){
  const location = useLocation();
  const user = location.state;
return(
    <div>
          <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center px-4">
      <h1 className="text-5xl font-bold animate-bounce mb-4">🎉 Welcome! 🎉</h1>
       <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-xl font-medium">You have successfully logged in.</p>
      <img
        src={user.photo}
        alt="User"
        className="mx-auto mt-4 rounded-full w-20 h-20"
      />
      <div className="mt-6">
        <button className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-full hover:bg-pink-100 transition duration-300">
          Explore More
        </button>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
            <Link
              to="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Logout
            </Link>
          </p>
      </div>
    </div>
    </div>
);
}
export default Welcome;
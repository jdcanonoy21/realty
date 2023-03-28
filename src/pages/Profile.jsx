import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: auth.currentUser.displayName,
    name: auth.currentUser.email,
  });

  const { email, name } = formData;

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center flex-col">
        <h1 className="text-3l text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 mx-auto">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
            />
            <input
              type="text"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?{' '}
                <span className="text-red-600 hover:text-red-700 transition eas-in-out duration-200 ml-1 cursor-pointer">
                  {' '}
                  Edit
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                onClick={handleLogout}
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;

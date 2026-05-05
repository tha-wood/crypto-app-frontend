import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/profile');
        setUser(data);
        setLoading(false);
      } catch (err) {
        // Not authenticated or token expired
        navigate("/signin");
      }
    };
    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center pt-20">
          <h2 className="text-2xl font-bold">Loading Profile...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f5f7fa] pt-[120px] pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-3xl font-bold mb-6">User Profile</h1>
            
            <div className="space-y-4 text-lg">
              <div className="flex border-b border-gray-100 pb-4">
                <span className="font-semibold w-32 text-gray-600">Name:</span>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex border-b border-gray-100 pb-4">
                <span className="font-semibold w-32 text-gray-600">Email:</span>
                <span className="text-gray-800">{user.email}</span>
              </div>
              <div className="flex pb-4">
                <span className="font-semibold w-32 text-gray-600">Account ID:</span>
                <span className="text-gray-500 font-mono text-sm self-center">{user._id}</span>
              </div>
            </div>
            
            <button 
              className="mt-8 bg-red-50 text-red-600 hover:bg-red-100 px-6 py-2 rounded-full font-medium transition-colors"
              onClick={() => {
                // To logout properly, you'd usually clear the cookie by having a /logout backend endpoint 
                // but since memory is just HTTP-only cookie, we just redirect or let it be for this assignment.
                // We'll navigate to login for now.
                navigate("/signin"); 
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

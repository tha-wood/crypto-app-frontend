import { useState } from "react";
import api from "../../../api";

export default function CreateCryptoForm({ onCryptoAdded }) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [change24h, setChange24h] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await api.post('/crypto', {
        name,
        symbol,
        price: Number(price),
        image,
        change24h: Number(change24h)
      });
      setMessage("Cryptocurrency added successfully!");
      setName("");
      setSymbol("");
      setPrice("");
      setImage("");
      setChange24h("");
      if (onCryptoAdded) onCryptoAdded();
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to add cryptocurrency");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-gray-200 bg-white px-4 py-8 md:px-8 xl:px-10 mb-8 mt-8 rounded-xl shadow-sm">
      <h3 className="text-2xl font-semibold mb-4">Add New Cryptocurrency</h3>
      {message && <p className={`mb-4 ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>{message}</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded pb-2 pt-2 px-3 focus:outline-none focus:border-blue-500" 
            placeholder="e.g. Bitcoin" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
          <input 
            type="text" 
            required
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full border border-gray-300 rounded pb-2 pt-2 px-3 focus:outline-none focus:border-blue-500" 
            placeholder="e.g. BTC" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
          <input 
            type="number" 
            step="any"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded pb-2 pt-2 px-3 focus:outline-none focus:border-blue-500" 
            placeholder="e.g. 64000" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">24h Change (%)</label>
          <input 
            type="number" 
            step="any"
            required
            value={change24h}
            onChange={(e) => setChange24h(e.target.value)}
            className="w-full border border-gray-300 rounded pb-2 pt-2 px-3 focus:outline-none focus:border-blue-500" 
            placeholder="e.g. 2.5" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input 
            type="text" 
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border border-gray-300 rounded pb-2 pt-2 px-3 focus:outline-none focus:border-blue-500" 
            placeholder="https://..." 
          />
        </div>
        <div className="md:col-span-2 lg:col-span-5 flex justify-end mt-2">
          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
          >
            {loading ? "Adding..." : "Add Crypto"}
          </button>
        </div>
      </form>
    </section>
  );
}

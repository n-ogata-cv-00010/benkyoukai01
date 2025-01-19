"use client";
import { useState } from "react";
import { Button } from "@repo/ui/button";

function UserCreate() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("ユーザーが作成されました");
        setFormData({ email: "", name: "" });
      } else {
        alert("エラーが発生しました");
      }
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">ユーザー作成</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border rounded text-black"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            名前
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded text-black"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          作成
        </button>
      </form>
    </div>
  );
}

export default UserCreate;

"use client";
import { useState } from "react";
import { ResultModal } from "../../components/ResultModal";
import { BackToHomeButton } from "../../components/BackToHomeButton";

function PostCreate() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          message: "投稿が作成されました",
          type: "success",
        });
        setFormData({ title: "", content: "" });
      } else {
        setModalState({
          isOpen: true,
          message: "エラーが発生しました",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setModalState({
        isOpen: true,
        message: "エラーが発生しました",
        type: "error",
      });
    }
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">投稿作成</h1>
        <BackToHomeButton />
      </div>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            required
            className="w-full p-2 border rounded text-black"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2">
            内容
          </label>
          <textarea
            id="content"
            className="w-full p-2 border rounded text-black"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          作成
        </button>
      </form>

      <ResultModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        message={modalState.message}
        type={modalState.type}
      />
    </div>
  );
}

export default PostCreate;

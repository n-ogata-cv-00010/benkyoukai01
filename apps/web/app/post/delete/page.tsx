"use client";
import { useEffect, useState } from "react";
import { ConfirmModal } from "../../components/ConfirmModal";
import { BackToHomeButton } from "../../components/BackToHomeButton";

type Post = {
  id: number;
  title: string;
  content: string | null;
  author: {
    id: number;
    name: string | null;
    email: string;
  } | null;
};

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (id: number) => {
    setSelectedPostId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedPostId === null) return;

    try {
      const response = await fetch(
        `http://localhost:3001/posts/${selectedPostId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setIsModalOpen(false);
        fetchPosts();
      } else {
        console.error("削除に失敗しました");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">投稿一覧</h1>
        <BackToHomeButton />
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-black">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">{post.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  作成者: {post.author?.name || post.author?.email || "不明"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  投稿ID：<span className="text-sky-600">{post.id}</span>
                </p>
              </div>
              <button
                onClick={() => handleDeleteClick(post.id + 1)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message="本当にこの投稿を削除しますか？"
      />
    </div>
  );
}

export default PostList;

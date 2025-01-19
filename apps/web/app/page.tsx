"use client";
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const handleClickButton = (pagePath: string) => {
    route.push(pagePath);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button
          className="p-2 border-2 border-blue-500 bg-blue-100 rounded-md"
          onClick={() => handleClickButton("/user/create")}
        >
          ユーザー作成
        </button>
        <button
          className="p-2 border-2 border-green-500 bg-green-100 rounded-md"
          onClick={() => handleClickButton("/post/create")}
        >
          投稿作成
        </button>
        <button
          className="p-2 border-2 border-red-500 bg-red-100 rounded-md"
          onClick={() => handleClickButton("/post/delete")}
        >
          投稿削除
        </button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  );
}

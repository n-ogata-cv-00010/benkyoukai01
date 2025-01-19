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
        <div className="flex gap-5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
            onClick={() => handleClickButton("/post/create")}
          >
            <span>+</span>
            投稿作成
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-2"
            onClick={() => handleClickButton("/post/delete")}
          >
            <span>×</span>
            投稿削除（一覧）
          </button>
        </div>
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

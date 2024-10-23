'use client'

import { FloatingChatComponent } from "@/components/app-components-floating-chat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo-placeholder.svg"
          alt="ChatBot Co. logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">Welcome to ChatBot Co.</h1>
        <p className="text-lg text-center sm:text-left max-w-2xl">
          We specialize in creating intelligent chatbot solutions to enhance your customer experience and streamline your business operations.
        </p>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">24/7 Customer Support</li>
          <li className="mb-2">AI-Powered Conversations</li>
          <li>Seamless Integration</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#demo"
          >
            Try Demo
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#contact"
          >
            Contact Sales
          </a>
        </div>
        <FloatingChatComponent />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#features"
        >
          <Image
            aria-hidden
            src="/features-icon.svg"
            alt="Features icon"
            width={16}
            height={16}
          />
          Features
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#case-studies"
        >
          <Image
            aria-hidden
            src="/case-studies-icon.svg"
            alt="Case studies icon"
            width={16}
            height={16}
          />
          Case Studies
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#about"
        >
          <Image
            aria-hidden
            src="/about-icon.svg"
            alt="About icon"
            width={16}
            height={16}
          />
          About Us
        </a>
      </footer>
    </div>
  );
}
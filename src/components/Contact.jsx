import SocialButton from "./SocialButton";

export default function Contact() {
  return (
    <section id="contact" className="bg-teal-100 py-20 border-t border-solid border-teal-600 px-4">
      <h1 className="text-center font-bold text-4xl pb-16">Contact Me</h1>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-8">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out if you'd like to work together or just have a chat!
        </p>
        <a
          href="mailto:yuhhuynh@gmail.com"
          className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Send Me an Email
        </a>
        <div className="flex justify-center gap-6 mt-10">
        <a href="mailto:yuhhuynh@gmail.com">
          <SocialButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </SocialButton>
        </a>
        <a href="https://github.com/HuyGHuynh" target="_blank" rel="noopener noreferrer">
          <SocialButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </SocialButton>
        </a>
        <a href="https://www.linkedin.com/in/huy-huynh11/" target="_blank" rel="noopener noreferrer">
          <SocialButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialButton>
        </a>
      </div>
      </div>
    </section>
  );
}

export default function SocialButton({ children }) {
  return (
    <button className="bg-cyan-500 text-black border-none p-2 rounded-full hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black transition-colors cursor-pointer">
      {children}
    </button>
  );
}
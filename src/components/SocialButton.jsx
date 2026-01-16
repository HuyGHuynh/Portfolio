export default function SocialButton({ children }) {
  return (
    <button className="bg-teal-600 text-white border-none p-2 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors cursor-pointer">
      {children}
    </button>
  );
}
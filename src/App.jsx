import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-r from-purple-400 to-blue-500 overflow-x-hidden items-center">
      <h1 className="bg-white shadow-lg rounded-lg w-11/12 text-center mt-10 px-10 py-4 text-4xl font-extrabold text-gray-800 tracking-wide">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-12 mt-12">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

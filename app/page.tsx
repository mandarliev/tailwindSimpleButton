import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-evenly m-5">
      <button className="p-2 bg-gray-300 rounded transition transform duration-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:z-50">
        Hello world
      </button>
      <button className="p-2 bg-gray-300 rounded transition transform duration-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:z-50">
        Hello world
      </button>
      <button className="p-2 bg-gray-300 rounded transition transform duration-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:z-50">
        Hello world
      </button>
    </div>
  );
}

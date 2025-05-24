export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 text-white">
      <nav>
        <ul className="flex space-x-10">
          <li>
            <a
              href="#about"
              className="hover:text-gray-400 hover:bg-[#EA354699] hover:p-2 rounded-full transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-400 hover:bg-[#EA354699] hover:p-2 rounded-full transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-400 hover:bg-[#EA354699] hover:p-2 rounded-full transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-400 hover:bg-[#EA354699] hover:p-2 rounded-full transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

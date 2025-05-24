export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-gray-400">
              AboHomeut
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

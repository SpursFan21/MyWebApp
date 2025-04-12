export default function Footer() {
    return (
      <footer className="bg-black/40 backdrop-blur-md text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Duncan Turner. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="mailto:duncanfrederic@gmail.com"
              className="hover:text-green-300 transition"
            >
              Contact
            </a>
            <a
              href="https://github.com/SpursFan21"
              target="_blank"
              className="hover:text-green-300 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/duncan-turner-09b89318a/"
              target="_blank"
              className="hover:text-green-300 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
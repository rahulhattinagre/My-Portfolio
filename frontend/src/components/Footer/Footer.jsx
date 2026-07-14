export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-secondaryText"></p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <a className="text-secondaryText hover:text-white" href="#about">About</a>
              <a className="text-secondaryText hover:text-white" href="#skills">Skills</a>
              <a className="text-secondaryText hover:text-white" href="#projects">Projects</a>
              <a className="text-secondaryText hover:text-white" href="#contact">Contact</a>
            </div>
          </div>
          <p className="text-sm text-secondaryText"></p>

        </div>

        <div className="mt-6">
          <a href="#home" className="text-sm text-secondaryText hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}


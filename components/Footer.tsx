export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">
            interview<span className="text-primary">.co</span>
          </h2>
          <p className="text-sm text-base-content/70 mt-1">
            AI-powered mock interviews to help you improve faster.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">GitHub</a>
        </div>

        {/* Right */}
        <div className="text-sm text-base-content/60 text-center md:text-right">
          © {new Date().getFullYear()} interview.co  
          <br />
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
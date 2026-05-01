export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 bg-base-200">
      <div className="max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-4">
          <span className="badge badge-primary badge-outline">
            AI Powered Mock Interviews
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          AI Mock Interviews <br />
          that actually feel
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            real
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-base-content/70">
          Practice interviews with an AI interviewer, get instant feedback, and
          improve your skills faster than ever.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn btn-primary px-8">Start Interview</button>

          <button className="btn btn-outline px-8">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-primary text-primary-content">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Start your first AI interview today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-primary-content/80">
          Practice smarter, get instant feedback, and improve faster.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="btn btn-secondary px-8 text-base font-semibold">
            Start Interview
          </button>
        </div>

      </div>
    </section>
  );
}
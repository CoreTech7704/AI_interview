export default function Features() {
  const features = [
    {
      title: "AI-driven Interviews",
      desc: "Practice with an AI interviewer that asks relevant, role-based questions.",
      icon: "🤖",
    },
    {
      title: "Real-time Feedback",
      desc: "Get instant feedback on your answers to improve quickly.",
      icon: "💬",
    },
    {
      title: "Follow-up Questions",
      desc: "Experience dynamic interviews with smart follow-up questions.",
      icon: "🔁",
    },
    {
      title: "Performance Insights",
      desc: "Track your strengths and weaknesses over time.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Everything you need to crack interviews
        </h2>

        <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
          Designed to simulate real interview scenarios and help you improve faster.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body items-center text-center">
                
                {/* Icon */}
                <div className="text-4xl">{feature.icon}</div>

                {/* Title */}
                <h3 className="card-title mt-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-base-content/70">
                  {feature.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
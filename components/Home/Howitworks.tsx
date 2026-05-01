export default function HowItWorks() {
  const steps = [
    {
      title: "Enter your role",
      desc: "Provide the job role and description you want to practice for.",
      icon: "🧾",
    },
    {
      title: "Start AI interview",
      desc: "Answer questions in a real-time conversational format.",
      icon: "💬",
    },
    {
      title: "Get feedback",
      desc: "Receive instant insights to improve your performance.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          How it works
        </h2>

        <p className="mt-4 text-base-content/70">
          Get started in minutes and improve with every session.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">

              {/* Circle Number */}
              <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-lg">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="text-3xl mt-4">{step.icon}</div>

              {/* Title */}
              <h3 className="mt-3 font-semibold text-lg">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-base-content/70 max-w-xs">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
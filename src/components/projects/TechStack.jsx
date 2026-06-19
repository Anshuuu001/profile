function TechStack({ tech }) {
  return (
    <div className="flex flex-wrap gap-3">

      {tech.map((item, index) => (
        <span
          key={index}
          className="
            px-4
            py-2
            rounded-xl
            text-sm
            bg-cyan-500/10
            border
            border-cyan-400/20
            text-cyan-300
          "
        >
          {item}
        </span>
      ))}

    </div>
  );
}

export default TechStack;
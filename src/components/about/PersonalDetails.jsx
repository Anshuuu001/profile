function PersonalDetails() {
  const details = [
    { label: "Full Name", value: "Ansh Bansod", icon: "👤" },
    { label: "Nickname", value: "Anshuuu", icon: "🏷️" },
    { label: "Birthday", value: "18 November", icon: "🎂" },
    { label: "Mother Tongue", value: "Marathi", icon: "🗣️" },
    { label: "Preferred Language", value: "Hindi", icon: "💬" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-2xl bg-black/20 border border-white/5 hover:scale-105 transition-transform duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-semibold text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          🎓 Education
        </h2>
        <div className="p-4 rounded-2xl bg-black/20 border border-white/5 hover:scale-[1.02] transition-transform duration-300 space-y-1">
          <h3 className="text-base font-bold text-white">
            Diploma in Computer Engineering
          </h3>
          <p className="text-sm text-cyan-400">CSIT Polytechnic, Deori</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;

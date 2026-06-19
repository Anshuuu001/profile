import CounterCard from "./CounterCard";

function AnalyticsGrid() {

  const analyticsData = [
    {
      title: "Total Views",
      value: "1.2M",
      icon: "👁",
    },

    {
      title: "Subscribers",
      value: "24K",
      icon: "🔥",
    },

    {
      title: "Watch Time",
      value: "8.5K hrs",
      icon: "⏳",
    },

    {
      title: "Engagement",
      value: "92%",
      icon: "🚀",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {analyticsData.map((item, index) => (
        <CounterCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}

    </div>
  );
}

export default AnalyticsGrid;
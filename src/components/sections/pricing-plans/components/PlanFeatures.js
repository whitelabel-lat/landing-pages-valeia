const PlanFeatures = ({ features = [] }) => {
  return (
    <div>
      <div className="h-[2px] bg-gray-200 my-5"></div>
      <p className="mb-4">¿Que Incluye?</p>
      <ul className="grid md:grid-cols-1 gap-4 mb-8">
        {features?.map((feature, index) => (
          <li key={index} className="break-inside-avoid">
            • {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanFeatures;
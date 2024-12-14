const PlanSelector = ({ plans, selectedPlan, onPlanSelect }) => {
  return (
    <div className="flex bg-black rounded-[20px] mb-5 overflow-hidden">
      {plans.map((plan, index) => (
        <button
          key={index}
          onClick={() => onPlanSelect(index)}
          className={`flex-1 py-2 px-1 md:px-2 font-bold text-base md:text-lg transition-colors whi||tespace-nowrap overflow-hidden text-ellipsis
            ${selectedPlan === index 
              ? 'bg-[#3DC2EB] text-black' 
              : 'bg-[#4A3ACF] text-white hover:bg-opacity-80'}`}
        >
          {plan.fields.name}
        </button>
      ))}
    </div>
  );
};

export default PlanSelector;
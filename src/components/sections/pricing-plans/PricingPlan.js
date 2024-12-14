import { useState } from 'react';
import PlanSelector from './components/PlanSelector';
import PlanDetails from './components/PlanDetails';
import PlanFeatures from './components/PlanFeatures';
import PlanActions from './components/PlanActions';

const PricingPlan = ({ plans }) => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const currentPlan = plans[selectedPlan];
  
  return (
    
    <div className="max-w-[600px] mx-auto bg-white rounded-3xl p-8 shadow-lg font-poppins h-full ">
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-6 text-center">SUBSCRIPCION</h2>
      
      <PlanSelector 
        plans={plans}
        selectedPlan={selectedPlan}
        onPlanSelect={setSelectedPlan}
      />

      <PlanDetails plan={currentPlan} />
      
      <PlanFeatures features={currentPlan?.fields?.features} />
      
      <PlanActions plan={currentPlan} />
    </div>
    </div>
    
  );
};

export default PricingPlan;
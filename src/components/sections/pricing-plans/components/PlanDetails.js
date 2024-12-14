const PlanDetails = ({ plan }) => {
  return (
    <div className="text-left">
                <h6 className="text-5xl text-blackColor font-medium mb-15px dark:text-blackColor-dark">
            <span className="text-size-58 pr-1">$</span>
            {plan.fields.price}
            <span className="text-size-22 text-contentColor dark:text-contentColor-dark">
              / month
            </span>
          </h6>
      <p className="mb-4">{plan.fields.moto}</p>
    </div>
  );
};

export default PlanDetails;
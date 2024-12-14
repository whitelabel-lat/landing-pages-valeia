const PlanActions = ({ plan }) => {
  const isEnterprise = plan.fields.name === "Enterprise";
  const calendlyUrl = "https://calendar.app.google/LgVjp2qzcw2G2UPD8";
  const LinkPay = plan.fields.payLink;

  return (
    <div className="flex flex-col font-bold sm:flex-row items-center gap-4">
      <a
        href={isEnterprise ? calendlyUrl : LinkPay}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-[#4A3ACF] text-white px-6 py-3 hover:bg-[#3DC2EB] hover:text-black transition-colors">
          {isEnterprise ? "Contactanos" : "Suscribete"}
        </button>
      </a>
      
      {!isEnterprise && (
        <a 
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:text-[#4A3ACF] transition-colors"
        >
          Agenda una llamada
        </a>
      )}
    </div>
  );
};

export default PlanActions;
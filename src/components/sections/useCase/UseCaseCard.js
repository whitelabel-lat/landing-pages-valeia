import Counter from '../sub-section/Counter';

const UseCaseCard = ({ data, isActive, onMouseEnter }) => {
  const { title, subtitle, counterItems } = data?.fields || {};
  const counterItemsData = counterItems ? [counterItems.fields] : [];

  return (
    <div 
      className={`use-case-card p-6 rounded-lg cursor-pointer transition-all duration-500 ${
        isActive ? 'bg-white  dark:bg-lightGrey10-dark shadow-lg' : 'bg-gray-50  dark:bg-lightGrey10-dark hover:bg-gray-100'
      }`}
      onMouseEnter={onMouseEnter}
    >
      <h3 className="text-xl font-bold text-blackColor dark:text-blackColor-dark">
        {title}
      </h3>
      
      <div className={`overflow-hidden transition-all duration-500 ${
        isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <p className="text-sm text-contentColor dark:text-contentColor-dark whitespace-pre-line">
          {subtitle}
        </p>
        
        {counterItemsData?.length > 0 && (
          <div className="mt-4">
            <Counter items={counterItemsData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UseCaseCard;
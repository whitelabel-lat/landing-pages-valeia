import FeesContentValeia from "@/components/shared/fees/FeesContentValeia";

const FeesValeia = ({
  title,
  subtitle,
  subInfo,
  listInfo,
  listAccordions,
  feesList,
}) => {
  return (
    <section>
      <div className=" pt-100px pb-70px">
        {/* overview  Heading */}
        <FeesContentValeia
          title={title}
          subtitle={subtitle}
          subInfo={subInfo}
          listInfo={listInfo}
          listAccordions={listAccordions}
          feesList={feesList}
        />
      </div>
    </section>
  );
};

export default FeesValeia;

import React from "react";

const FeesItems = ({ fees }) => {
  return (
    <div className="content-wrapper p-10px md:px-30px">
      <ul>
        <li className={`py-18px flex items-center justify-between flex-wrap  `}>
          <div>
            <h4 className="text-blackColor dark:text-blackColor-dark font-thin leading-1">
              {fees}
            </h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FeesItems;

import DropdownContainerPrimary from "@/components/shared/containers/DropdownContainerPrimary";
import React from "react";
import DropdownItem from "./DropdownItem";


const DropdownPrimary = ({ items }) => {
  return (
    <DropdownContainerPrimary>
      <ul>
        {items?.map((item, idx) => (
          <DropdownItem key={idx} item={item} />
        ))}
      </ul>
    </DropdownContainerPrimary>
  );
};

export default DropdownPrimary;

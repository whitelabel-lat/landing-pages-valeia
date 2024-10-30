import AccordionController from "@/components/shared/accordion/AccordionController";


import Accordion from "@/components/shared/accordion/Accordion";
import AccordionContent from "@/components/shared/accordion/AccordionContent";
import MobileLink from "./MobileLink";
const MobileMenuItem = ({ item }) => {
  const { name, path, children, accordion } = item;

  return !accordion ? (
    <MobileLink item={{ name, path }} />
  ) : (
    <Accordion>
      <AccordionController type={"primary"}>
        <MobileLink item={{ name, path }} />
      </AccordionController>
      <AccordionContent>{children && children}</AccordionContent>
    </Accordion>
  );
};

export default MobileMenuItem;

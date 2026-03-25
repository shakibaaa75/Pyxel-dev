import ServicesGridCards from "./ServicesGridCards";
import CreativeDesignsSection from "../homePage/homeComponents/CreativeDesignsSection";
import ToolsSection from "../homePage/homeComponents/ToolsSection";

export const ServicesPage = () => {
  return (
    <>
      <ServicesGridCards />
      <CreativeDesignsSection className="bg-[#111111]" />
      <ToolsSection />
    </>
  );
};

export default ServicesPage;

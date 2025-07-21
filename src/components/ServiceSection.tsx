import { ServiceWithRating } from "@/lib/supabaseQueries";
import ServiceCard from "./ServiceCard";
interface ServiceSectionProp {
  data: ServiceWithRating[];
}

const ServiceSection = ({ data }: ServiceSectionProp) => {
  return (
    <div className="py-10">
      <p className="text-2xl font-bold  ${data.length > 3 ? 'overflow-x-auto scrollbar-hide' : ''} pb-5">
        See my services
      </p>
      <div
        className={`flex gap-3 ${
          data.length > 3 ? "overflow-x-auto scrollbar-hide" : ""
        }`}
      >
        {data?.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;

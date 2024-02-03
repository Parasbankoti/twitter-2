import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

interface Props {
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="flex items-center max-w-fit font-semibold cursor-pointer px-1 py-3 hover:bg-[#e2e1e1] hover:rounded-xl group">
      <Icon className="h-5 w-5 mx-2" />
      <p className="group-hover:text-twitter mr-3">{title}</p>
    </div>
  );
};

export default SidebarRow;

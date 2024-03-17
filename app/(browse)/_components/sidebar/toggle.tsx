"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useSidebar } from "@/store/usesidebar";

const Toggle = () => {
  const { collapse, onExpand, onCollapse } = useSidebar((state) => state);
  return (
    <div className="cursor-pointer">
      {(collapse && <ArrowRightFromLine onClick={onExpand} />) || (
        <ArrowLeftFromLine onClick={onCollapse} size={25} />
      )}
    </div>
  );
};

export default Toggle;

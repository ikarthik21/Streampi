"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/usesidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { collapse } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col rounded-tr-lg w-60 h-full border-t bg-[#18181b] border-r border-[#2D2E35] z-50 mt-[14px]  transition-width duration-500 p-2",
        collapse && "w-16 transition-width duration-500 "
      )}
    >
      {children}
    </aside>
  );
};
export default Wrapper;

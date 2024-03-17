import Wrapper from "./wrapper";
import Toggle from "./toggle";
const SideBar = () => {
  return (
    <Wrapper>
      <div className="p-2 text-white  flex justify-end">
        <Toggle />
      </div>
    </Wrapper>
  );
};

export default SideBar;

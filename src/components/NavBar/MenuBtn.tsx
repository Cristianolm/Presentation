interface MenuBtnProps {
  handleClick: () => void;
  checkState: boolean;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ handleClick, checkState }) => {
  return (
    <label className="z-20">
      <input
        type="checkbox"
        checked={checkState}
        onChange={handleClick}
        className="peer sr-only"
      />
      <div
        id="navbarMenu"
        className="flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-white bg-opacity-50  transition-all duration-1000   before:h-0.5  before:w-24 before:bg-black after:h-0.5 after:w-24   after:bg-black  hover:font-DMSansBold peer-checked:text-[0px]  
	peer-checked:text-transparent  peer-checked:before:h-0  peer-checked:before:w-0 dark:bg-black dark:bg-opacity-50 dark:before:bg-white  dark:after:bg-white md:text-lg md:leading-tight"
      >
        <p>Menu</p>
      </div>
      <p className="flex cursor-pointer flex-col items-center justify-center text-[0px] text-gray-700  transition-all before:h-[0px] before:w-0 hover:font-DMSansBold peer-checked:text-base   peer-checked:delay-1000 peer-checked:before:w-24 peer-checked:before:bg-black  dark:text-gray-700 peer-checked:dark:dark:before:h-0.5 peer-checked:md:text-lg">
        Hide
      </p>
    </label>
  );
};

export default MenuBtn;

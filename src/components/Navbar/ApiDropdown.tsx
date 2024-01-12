import { Menu } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from "@mantine/hooks";

const ApiDropdown = () => {
  const matches = useMediaQuery(`(max-width: 1024px)`);
  return (
    <div>
      <Menu
        shadow="md"
        width={200}
        zIndex={999}
        position={!matches ? "bottom" : "right-start"}
      >
        <Menu.Target>
          <button className="flex gap-2 items-center">
            <span>API</span>
            <IoIosArrowDown />
          </button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ApiDropdown;

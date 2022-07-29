import React from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import * as S from "../styles/styled";

export type DropdownItemType = {
  name: string;
  accessor: string;
};

interface DropdownItemProps {
  item: DropdownItemType;
  active: Boolean;
  onClick: (item: DropdownItemType) => void;
}

interface DropdownProps {
  items: DropdownItemType[];
  active: DropdownItemType;
  onChange: (item: DropdownItemType) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  item,
  active,
  onClick,
}) => {
  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(item);
  };

  return (
    <li onClick={handleItemClick}>
      <span>{item.name}</span>
    </li>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ items, active, onChange }) => {
  const [isActive, setActive] = React.useState<Boolean>(false);
  return (
    <S.DropdownWrapper>
      <S.Dropdown
        onClick={() => {
          setActive(!isActive);
        }}
        className="w-full border border-selectOrange bg-white rounded p-3 flex items-center"
      >
        <S.DropdownActiveName>{active.name}</S.DropdownActiveName>

        <S.DropdownIcon className="ml-auto">
          {isActive ? (
            <CaretUpFill className="fill-selectArrowOrange" />
          ) : (
            <CaretDownFill className="fill-selectArrowOrange" />
          )}
        </S.DropdownIcon>
      </S.Dropdown>
      {isActive && (
        <S.DropdownList>
          {items &&
            items.map((item: DropdownItemType, index) => (
              <DropdownItem
                key={index}
                item={item}
                active={false}
                onClick={(item: DropdownItemType) => {
                  onChange(item);
                  setActive(false);
                }}
              />
            ))}
        </S.DropdownList>
      )}
    </S.DropdownWrapper>
  );
};

export default Dropdown;

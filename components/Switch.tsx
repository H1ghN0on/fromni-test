import React from "react";
import * as S from "../styles/styled";

type SwitchItemType = {
  name: string;
  accessor: string;
};

interface SwitchProps {
  prop1: SwitchItemType;
  prop2: SwitchItemType;
  onChange: (value: SwitchItemType) => void;
  checked: boolean;
}

const Switch: React.FC<SwitchProps> = ({ prop1, prop2, onChange, checked }) => {
  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked ? prop2 : prop1);
  };

  return (
    <S.KeyboardChoice>
      <S.KeyboardName>{prop1.name}</S.KeyboardName>
      <S.Switch
        checked={checked}
        type="checkbox"
        onChange={handleSwitchChange}
      />
      <S.KeyboardName>{prop2.name}</S.KeyboardName>
    </S.KeyboardChoice>
  );
};

export default Switch;

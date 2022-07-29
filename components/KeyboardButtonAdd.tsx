import React from "react";

import * as S from "../styles/styled";
import Dropdown from "./Dropdown";
import { KeyboardButtonTypeType } from "./KeyboardBox";

export type KeyboardButtonType = {
  name: string;
  type: KeyboardButtonTypeType;
  id: number;
};

interface KeyboardButtonAddProps {
  maxButtonLength: number;
  onButtonAdd: (button: Omit<KeyboardButtonType, "id">) => void;
  buttonForEdit: KeyboardButtonType | null;
  onButtonEdit: (button: KeyboardButtonType) => void;
}

const KeyboardButtonAdd: React.FC<KeyboardButtonAddProps> = ({
  maxButtonLength,
  onButtonAdd,
  buttonForEdit,
  onButtonEdit,
}) => {
  const keyboardMessageTypes: KeyboardButtonTypeType[] = [
    {
      name: "URL",
      accessor: "url",
    },
    { name: "Текст", accessor: "text" },
  ];

  React.useEffect(() => {
    if (buttonForEdit) {
      setValue(buttonForEdit.name);
      setActiveType(buttonForEdit.type);
    }
  }, [buttonForEdit]);

  const [value, setValue] = React.useState<string>("");
  const [activeType, setActiveType] = React.useState<KeyboardButtonTypeType>(
    keyboardMessageTypes[0]
  );

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonAdd = () => {
    if (buttonForEdit) {
      onButtonEdit({
        id: buttonForEdit.id,
        name: value,
        type: activeType,
      });
    } else {
      onButtonAdd({
        name: value,
        type: activeType,
      });
    }
  };

  return (
    <S.KeyboardButtonAdd>
      <S.KeyboardDropdown>
        <Dropdown
          onChange={(type) => {
            setActiveType(type);
          }}
          items={keyboardMessageTypes}
          active={activeType}
        />
      </S.KeyboardDropdown>
      <S.KeyboardButtonInputWrapper>
        <S.KeyboardButtonInput
          onChange={handleValueChange}
          maxLength={maxButtonLength}
          value={value}
        />
        <S.KeyboardButtonInputSize>
          {value.length + "/" + maxButtonLength}
        </S.KeyboardButtonInputSize>
      </S.KeyboardButtonInputWrapper>

      <S.KeyboardButtonTools>
        <S.KeyboardButtonTool onClick={handleButtonAdd}>
          {buttonForEdit ? "Изменить" : "Добавить"}
        </S.KeyboardButtonTool>
      </S.KeyboardButtonTools>
    </S.KeyboardButtonAdd>
  );
};

export default KeyboardButtonAdd;

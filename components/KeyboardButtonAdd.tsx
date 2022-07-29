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
  urlSupport: boolean;
}

const KeyboardButtonAdd: React.FC<KeyboardButtonAddProps> = ({
  maxButtonLength,
  onButtonAdd,
  buttonForEdit,
  onButtonEdit,
  urlSupport,
}) => {
  const keyboardMessageTypes: KeyboardButtonTypeType[] = [
    {
      name: "Текст",
      accessor: "text",
    },
    { name: "URL", accessor: "url" },
  ];

  React.useEffect(() => {
    if (buttonForEdit) {
      setValue(buttonForEdit.name);
      setActiveType(buttonForEdit.type);
    }
  }, [buttonForEdit]);

  React.useEffect(() => {
    if (!urlSupport) {
      setActiveType(keyboardMessageTypes[0]);
    }
  }, [urlSupport]);

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
          items={
            urlSupport
              ? keyboardMessageTypes
              : keyboardMessageTypes.filter((type) => type.accessor !== "url")
          }
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
          {value.length +
            "/" +
            (maxButtonLength === Infinity ? "∞" : maxButtonLength)}
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

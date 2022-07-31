import React from "react";
import * as S from "@styles/styled";

import KeyboardButton from "@components/Main/Keyboard/KeyboardButton";
import KeyboardButtonAdd from "@components/Main/Keyboard/KeyboardButtonAdd";
import { keyboardTypes } from "@components/Main/Content";
import Switch from "@components/Common/Switch";
import { KeyboardButtonType, KeyboardTypeType } from "@types";

interface KeyboardBoxProps {
  maxButtonNumber: number;
  maxButtonLength: number;
  onKeyboardChange: (type: KeyboardTypeType) => void;
  onButtonAdd: (button: Omit<KeyboardButtonType, "id">) => void;
  onButtonEdit: (button: KeyboardButtonType) => void;
  onButtonDelete: (button: KeyboardButtonType) => void;
  items: KeyboardButtonType[];
  keyboardType: KeyboardTypeType;
  urlSupport: boolean;
}

const KeyboardBox: React.FC<KeyboardBoxProps> = ({
  maxButtonNumber,
  maxButtonLength,
  onKeyboardChange,
  onButtonAdd,
  onButtonDelete,
  onButtonEdit,
  items,
  keyboardType,
  urlSupport,
}) => {
  const [forEdit, setForEdit] = React.useState<KeyboardButtonType | null>(null);

  const handleButtonEdit = (item: KeyboardButtonType) => {
    onButtonEdit(item);
    setForEdit(null);
  };

  return (
    <>
      <S.KeyboardButtonWrapper>
        <Switch
          prop1={keyboardTypes[0]}
          prop2={keyboardTypes[1]}
          onChange={onKeyboardChange}
          checked={keyboardType.accessor === keyboardTypes[1].accessor}
        />
        <KeyboardButtonAdd
          urlSupport={urlSupport}
          maxButtonLength={maxButtonLength}
          onButtonAdd={onButtonAdd}
          buttonForEdit={forEdit}
          onButtonEdit={handleButtonEdit}
        />
        <S.KeyboardButtonListWrapper>
          <S.KeyboardButtonList>
            {items &&
              items.map((button, index) => (
                <KeyboardButton
                  key={index}
                  item={button}
                  onEdit={setForEdit}
                  onDelete={onButtonDelete}
                />
              ))}
          </S.KeyboardButtonList>
          <S.KeyboardButtonSize error={items.length > maxButtonNumber}>
            {items.length +
              "/" +
              (maxButtonNumber === Infinity ? "∞" : maxButtonNumber)}
          </S.KeyboardButtonSize>
        </S.KeyboardButtonListWrapper>
      </S.KeyboardButtonWrapper>
    </>
  );
};

export default KeyboardBox;

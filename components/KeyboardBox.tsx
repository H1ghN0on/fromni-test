import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import * as S from "../styles/styled";
import KeyboardButton from "./KeyboardButton";
import KeyboardButtonAdd, { KeyboardButtonType } from "./KeyboardButtonAdd";
import { keyboardTypes } from "./Main/Content";
import Switch from "./Switch";

export type KeyboardTypeType = {
  name: string;
  accessor: string;
};

export type KeyboardButtonTypeType = {
  name: string;
  accessor: string;
};

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
          onButtonEdit={(item) => {
            onButtonEdit(item);
            setForEdit(null);
          }}
        />
        <S.KeyboardButtonListWrapper>
          <S.KeyboardButtonList>
            {items &&
              items.map((button, index) => (
                <KeyboardButton
                  key={index}
                  item={button}
                  onEdit={(item) => {
                    setForEdit(item);
                  }}
                  onDelete={(item) => {
                    onButtonDelete(item);
                  }}
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

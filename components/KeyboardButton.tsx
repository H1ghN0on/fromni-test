import React from "react";
import { KeyboardButtonType } from "./KeyboardButtonAdd";
import * as S from "../styles/styled";
import { MdDelete, MdEdit } from "react-icons/md";

interface KeyboardButtonProps {
  onEdit: (item: KeyboardButtonType) => void;
  onDelete: (item: KeyboardButtonType) => void;
  item: KeyboardButtonType;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  onEdit,
  onDelete,
  item,
}) => {
  return (
    <S.KeyboardButton>
      <S.KeyboardButtonType>{item.type.name}</S.KeyboardButtonType>
      <S.KeyboardButtonText>{item.name}</S.KeyboardButtonText>
      <S.KeyboardButtonTools>
        <S.KeyboardButtonTool>
          <MdEdit onClick={() => onEdit(item)} />
        </S.KeyboardButtonTool>
        <S.KeyboardButtonTool>
          <MdDelete onClick={() => onDelete(item)} />
        </S.KeyboardButtonTool>
      </S.KeyboardButtonTools>
    </S.KeyboardButton>
  );
};

export default KeyboardButton;

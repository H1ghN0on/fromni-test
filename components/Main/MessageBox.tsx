import React from "react";
import * as S from "@styles/styled";

interface MessageBoxProps {
  value: string;
  onChange: (value: string) => void;
  maxSize: number;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  value,
  onChange,
  maxSize,
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <S.MessageBox>
      <S.MessageLabel>Введите сообщение</S.MessageLabel>
      <S.MessageInput
        maxLength={maxSize}
        value={value}
        onChange={handleValueChange}
      />
      <S.MessageSizeLabel>
        {value.length + "/" + (maxSize === Infinity ? "∞" : maxSize)}
      </S.MessageSizeLabel>
    </S.MessageBox>
  );
};

export default MessageBox;

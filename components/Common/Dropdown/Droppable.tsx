import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

import * as S from "@styles/styled";

interface DroppableProps {
  name: string;
  children: React.ReactNode;
}

const Droppable: React.FC<DroppableProps> = ({ name, children }) => {
  const [isActive, setActive] = React.useState<Boolean>(false);

  const handleDroppableClick = () => {
    setActive(!isActive);
  };

  return (
    <S.DroppableOption>
      <S.DroppableButton onClick={handleDroppableClick}>
        <S.DroppableTitle>{name}</S.DroppableTitle>
        <S.DroppableIcon active={isActive}>
          <RiArrowDownSFill />
        </S.DroppableIcon>
      </S.DroppableButton>
      {isActive && <S.DroppableContent>{children}</S.DroppableContent>}
    </S.DroppableOption>
  );
};

export default Droppable;

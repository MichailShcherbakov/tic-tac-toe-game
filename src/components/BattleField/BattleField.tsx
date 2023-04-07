import styled from "@emotion/styled";
import { Cell } from "../Cell";
import { UiGird } from "~/ui-kit/Grid";

export const BattleFieldBase = styled(UiGird)(() => ({
  width: "fit-content",
}));

BattleFieldBase.defaultProps = {
  cols: 3,
};

export function BattleField() {
  return (
    <BattleFieldBase>
      {new Array(9).fill(0).map((_, idx) => (
        <Cell
          key={idx}
          value={idx % 2 ? "cross" : idx % 4 ? "circle" : undefined}
        />
      ))}
    </BattleFieldBase>
  );
}

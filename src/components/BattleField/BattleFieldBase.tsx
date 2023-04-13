import styled from "@emotion/styled";
import { UiGird, UiGridProps } from "~/ui-kit/Grid";

export interface BattleFieldBaseProps extends UiGridProps {}

export const BattleFieldBase = styled(UiGird)(() => ({
  width: "fit-content",
}));

BattleFieldBase.defaultProps = {
  cols: 3,
};

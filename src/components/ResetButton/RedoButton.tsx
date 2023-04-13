import { ReactComponent as ResetIcon } from "~/assets/icons/redo.svg";
import { ResetButtonBase, ResetButtonBaseProps } from "./ResetButtonBase";
import { observer } from "mobx-react-lite";
import { useTicTacToeEngine } from "~/hooks/useTicTacToeEngine";

export interface ResetButtonProps extends ResetButtonBaseProps {}

export const ResetButton = observer(() => {
  const { engine } = useTicTacToeEngine();

  function clickHandler() {
    engine.reset();
  }

  return (
    <ResetButtonBase onClick={clickHandler}>
      <ResetIcon />
    </ResetButtonBase>
  );
});

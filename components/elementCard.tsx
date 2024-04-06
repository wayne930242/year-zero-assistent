import { useState } from "react";
import { Dices, Eraser, WrapText } from "lucide-react";
import { animated, useSpring } from "@react-spring/web";
import { GameElement } from "@/lib/types";
import { Button } from "./ui/button";
import { TableElement } from "./element/table";

export function ElementTable({ element }: Props) {
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [diceResult, setDiceResult] = useState<number | string>();
  const [nowrap, setNowrap] = useState<boolean>(true);

  const animation = useSpring({
    to: { transform: "rotate(360deg)" },
    from: { transform: "rotate(0deg)" },
    reset: isRolling,
    reverse: false,
    onRest: () => setIsRolling(false),
    config: { duration: 300 },
  });

  return (
    <div className="my-2">
      <div className="flex gap-4 justify-end pb-2">
        <Button
          size="icon"
          variant={nowrap ? "outline" : "default"}
          onClick={() => setNowrap(!nowrap)}
        >
          <WrapText />
        </Button>

        {element.type === "random-table" && (
          <>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setDiceResult(undefined)}
              disabled={diceResult === undefined}
            >
              <Eraser />
            </Button>
            <Button
              size="icon"
              disabled={isRolling}
              onClick={() => {
                if (isRolling) return;
                setIsRolling(true);
                if (element.type === "random-table") {
                  const totalWeight = element.rows.reduce(
                    (acc, row) => acc + (row.weight ?? 1),
                    0
                  );
                  const random = Math.random() * totalWeight;
                  let resultIndex = 0;
                  let currentWeight = 0;
                  while (currentWeight < random) {
                    currentWeight += element.rows[resultIndex].weight ?? 1;
                    resultIndex++;
                  }
                  resultIndex = Math.max(0, resultIndex - 1);
                  const result = element.rows[resultIndex].rowId;
                  setDiceResult(result);
                }
              }}
            >
              <animated.div style={animation}>
                <Dices />
              </animated.div>
            </Button>
          </>
        )}
      </div>
      {(element.type === "random-table" || element.type === "example") && (
        <TableElement
          element={element}
          diceResult={diceResult}
          nowrap={nowrap}
        />
      )}
    </div>
  );
}

interface Props {
  element: GameElement;
}

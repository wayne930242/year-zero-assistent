import { RuleElement } from "@/lib/types";

export const ruleElement = ({ element }: Props) => {
  return <>{element.name}</>;
};

interface Props {
  element: RuleElement;
}

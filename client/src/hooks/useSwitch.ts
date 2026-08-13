import { useState } from "react";

/** Hook simple pour un état booléen de type interrupteur (toggle). */
export function useSwitch(initial: boolean): [boolean, (v: boolean) => void] {
  const [value, setValue] = useState(initial);
  return [value, setValue];
}

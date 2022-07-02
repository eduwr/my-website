import { useTranslate } from "../../hooks/useTranslate";
import type { Dictionary } from "../../contexts/TranslateContext";

interface Props {
  textKey: keyof Dictionary;
  defaultText?: string;
}

export const Translated = ({ textKey, defaultText }: Props): JSX.Element => {
  const { translate } = useTranslate()
  return <>{translate(textKey, defaultText)}</>
}
import { useTranslate } from "../../hooks/useTranslate";
import type { Dictionary } from "../../contexts/TranslateContext";

interface Props {
  key: keyof Dictionary;
  defaultMessage?: string;
}

export const Translated = ({ key, defaultMessage }: Props): JSX.Element => {
  const { translate } = useTranslate()
  return <>{translate(key, defaultMessage)}</>
}
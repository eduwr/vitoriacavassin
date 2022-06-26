import { createContext, ReactNode, useState } from "react"
import ptBR from '../lang/pt-BR.json';
import enUS from '../lang/en-US.json';

enum LANGUAGES {
  PT_BR = "pt-BR",
  EN_US = "en-US"
}

export type Dictionary = ReturnType<() => typeof ptBR>

const langMapping: Record<LANGUAGES, Dictionary> = {
  [LANGUAGES.PT_BR]: ptBR,
  [LANGUAGES.EN_US]: enUS
}

interface Props {
  children: ReactNode
}

export interface TranslateContextValues {
  dictionary: Dictionary,
  changeLanguage: (lang: LANGUAGES) => void;
  translate: (key: keyof Dictionary, def?: string) => string | undefined
}

export const TranslateContext = createContext<TranslateContextValues>({} as TranslateContextValues)

export const TranslateProvider = ({ children }: Props) => {
  const [ dictionary, setDictionary ] = useState(ptBR)

  const changeLanguage = (lang: LANGUAGES) => {
    setDictionary(langMapping[lang])
  }

  const translate = (key: keyof Dictionary, def?: string) => {
    return dictionary[key] || def
  }

  return (
    <TranslateContext.Provider
      value={{
        dictionary,
        changeLanguage,
        translate
      }}
    >
      {children}
    </TranslateContext.Provider>)
}
import { createContext, ReactNode, useState } from "react"
import ptBR from '../lang/pt-BR.json';
import enUS from '../lang/en-US.json';

enum LANGUAGES {
  PT_BR = "pt-BR",
  EN_US = "en-US"
}

type Dictionary = ReturnType<() => typeof ptBR>

const langMapping: Record<LANGUAGES, Dictionary> = {
  [LANGUAGES.PT_BR]: ptBR,
  [LANGUAGES.EN_US]: enUS
}

interface Props {
  children: ReactNode
}

const context = createContext({})

export const LanguageContextProvider = ({ children }: Props) => {
  const [ dictionary, setDictionary ] = useState(ptBR)

  const changeLanguage = (lang: LANGUAGES) => {
    setDictionary(langMapping[lang])
  }

  return <context.Provider value={{ dictionary }}>{children}</context.Provider>
}
import { createContext, ReactNode, useCallback, useMemo } from "react"
import ptBR from '../lang/pt-BR.json';
import enUS from '../lang/en-US.json';
import { useRouter } from "next/router";

export enum LANGUAGES {
  PT_BR = "pt-BR",
  EN_US = "en-US"
}

export type Dictionary = ReturnType<() => typeof ptBR>


interface Props {
  children: ReactNode
}

export interface TranslateContextValues {
  translate: (key: keyof Dictionary, def?: string) => string | null
}

export const TranslateContext = createContext<TranslateContextValues>({} as TranslateContextValues)

const langMapping: Record<LANGUAGES, Dictionary> = {
  [LANGUAGES.EN_US]: enUS,
  [LANGUAGES.PT_BR]: ptBR,
}

export const TranslateProvider = ({ children }: Props) => {
  const { locale } = useRouter()

  const dictionary = useMemo(() => {
    return langMapping[locale as LANGUAGES] || langMapping[LANGUAGES.EN_US]
  }, [locale])

  const translate = useCallback((key: keyof Dictionary, def?: string) => {
    return dictionary[key] || def || null
  }, [dictionary])

  return (
    <TranslateContext.Provider
      value={{ translate }}
    >
      {children}
    </TranslateContext.Provider>
  )
}
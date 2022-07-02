import { useContext } from "react";

import { TranslateContext } from "../contexts/TranslateContext";
import type { TranslateContextValues } from "../contexts/TranslateContext"

export const useTranslate = (): TranslateContextValues => {
  const context = useContext(TranslateContext);
  if (context === undefined) {
    throw new Error("useTranslate must be used within a TranslateProvider");
  }
  return context;
};
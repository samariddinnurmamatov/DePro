import "i18next";
import { LangsType } from "@/types";
type ILanguageKeys = Record<string, ILanguageKeys>;

type ILanguageNS = {
  common: ILanguageKeys;
  "not-found": ILanguageKeys;
  "internal-server-error": ILanguageKeys;
};

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: ILanguageNS;
  }

  interface i18n {
    language: LangsType;
  }
}

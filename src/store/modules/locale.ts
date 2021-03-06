import type { AvailableLocalesTypeValues } from "#/locales";
import { defaultLocale } from "@/locales";
import { defineStore } from "pinia";
import Store from "@/store";

interface LocaleState {
  lang: AvailableLocalesTypeValues;
}

const useLocaleStore = defineStore({
  id: "locale",
  state: (): LocaleState => ({
    lang: defaultLocale
  }),
  actions: {
    /**
     *在 Store 中设置当前系统语言
     * @param lang 要设置的语言
     */
    changeStoreUseLocale(lang: AvailableLocalesTypeValues) {
      this.lang = lang;
    }
  }
});

export { useLocaleStore };

/** 在非 setup 使用 */
export function useLocaleStoreOut() {
  return useLocaleStore(Store);
}

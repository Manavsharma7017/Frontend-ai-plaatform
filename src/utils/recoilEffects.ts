// utils/recoilEffects.ts
export const localStorageEffect = <T>(key: string) =>
  ({ setSelf, onSet }: any) => {
    const saved = localStorage.getItem(key);
    if (saved != null) {
      setSelf(JSON.parse(saved));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
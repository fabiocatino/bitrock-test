import { createContext, useState } from "react";
import { Character } from "types/character";

interface GlobalContextProps {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

const GlobalContext = createContext<Partial<GlobalContextProps>>({});

const GlobalContextProvider = ({ children }: any) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        characters,
        setCharacters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };

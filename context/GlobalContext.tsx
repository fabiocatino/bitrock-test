import { createContext, useState } from "react";
import { Character } from "types/character";

interface GlobalContextProps {
  children?: JSX.Element | JSX.Element[];
  characters?: Character[];
  setCharacters?: React.Dispatch<React.SetStateAction<Character[]>>;
  favorites?: Character[];
  setFavorites?: React.Dispatch<React.SetStateAction<Character[]>>;
}

const GlobalContext = createContext<Partial<GlobalContextProps>>({});

const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<Character[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        characters,
        setCharacters,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };

import Text from "atoms/Text";
import axios from "axios";
import Image from "next/image";
import {
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Character } from "types/character";
import { Episode } from "types/episode";
import { CardContainer, EpisodesContainer, ModalContainer } from "./styles";

interface ModalProps {
  close: () => void;
  character?: Character;
}

export default function Modal({ close, character }: ModalProps): ReactElement {
  const card = useRef<HTMLDivElement | null>(null);
  const [episodesTitle, setEpisodesTitle] = useState<Episode[]>();

  const handleClickOut = (e: MouseEvent<HTMLDivElement>) =>
    card?.current && !card.current.contains(e.target as Node) && close();

  let episodesArray: string[] = [];
  character?.episode?.forEach((episode: any) =>
    episodesArray.push(episode.split("/").pop())
  );
  const fetchEpisodesTitle = useCallback(async () => {
    const resp = await axios.get(
      `https://rickandmortyapi.com/api/episode/${episodesArray}`
    );
    setEpisodesTitle(resp.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchEpisodesTitle();
  }, [fetchEpisodesTitle]);

  return (
    <ModalContainer onClick={handleClickOut}>
      <CardContainer ref={card}>
        <Image
          objectFit="cover"
          width={200}
          height={200}
          src={character!.image}
          alt="image"
        />
        <Text>Name: {character?.name}</Text>
        <Text>Status: {character?.status}</Text>
        <Text>Species: {character?.species}</Text>
        <Text>Gender: {character?.gender}</Text>
        <Text>Origin: {character?.origin.name}</Text>
        <Text>Location: {character?.location.name}</Text>

        {episodesTitle && episodesTitle.length >= 1 && (
          <EpisodesContainer>
            <h2>Appears in: </h2>
            {episodesTitle?.map((episode: Episode, index: number) => (
              <span key={index}>{episode?.name}</span>
            ))}
          </EpisodesContainer>
        )}
      </CardContainer>
    </ModalContainer>
  );
}

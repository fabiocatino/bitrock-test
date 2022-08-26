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
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Character } from "types/character";
import { Episode } from "types/episode";
import {
  CardContainer,
  EpisodesContainer,
  ImageContainer,
  ModalContainer,
} from "./styles";

interface ModalProps {
  close: () => void;
  character?: Character;
}

export default function Modal({ close, character }: ModalProps): ReactElement {
  const card = useRef<HTMLDivElement | null>(null);
  const [episodesTitle, setEpisodesTitle] = useState<Episode[]>();
  const [showEpisodes, setShowEpisodes] = useState(false);

  const handleClickOut = (e: MouseEvent<HTMLDivElement>) =>
    card?.current && !card.current.contains(e.target as Node) && close();

  //This function takes everything after the last / in the string and pushes it into the array
  let episodesArray: string[] = [];
  character?.episode?.forEach((episode: any) =>
    episodesArray.push(episode.split("/").pop())
  );
  const fetchEpisodesTitle = useCallback(async () => {
    try {
      const resp = await axios.get(
        `https://rickandmortyapi.com/api/episode/${episodesArray}`
      );
      setEpisodesTitle(resp.data);
    } catch (error) {
      throw new Error("Something went wrong");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchEpisodesTitle();
  }, [fetchEpisodesTitle]);

  return (
    <ModalContainer onClick={handleClickOut}>
      <CardContainer ref={card}>
        <AiOutlineClose
          id="close-modal"
          onClick={close}
          role="graphics-document"
        />
        <ImageContainer>
          <Image layout="fill" src={character!.image} alt="image" />
        </ImageContainer>
        <Text>Name: {character?.name}</Text>
        <Text>Status: {character?.status}</Text>
        <Text>Species: {character?.species}</Text>
        <Text>Gender: {character?.gender}</Text>
        <Text>Origin: {character?.origin.name}</Text>
        <Text>Location: {character?.location.name}</Text>

        {episodesTitle && episodesTitle.length >= 1 && (
          <EpisodesContainer>
            <h3>
              Episodes:
              {showEpisodes ? (
                <MdOutlineExpandLess onClick={() => setShowEpisodes(false)} />
              ) : (
                <MdOutlineExpandMore onClick={() => setShowEpisodes(true)} />
              )}
            </h3>
            {/* If the user clicks on the arrow, showEpisodes is set to true, and episode titles are shown if available */}
            {showEpisodes && (
              <>
                {episodesTitle?.map((episode: Episode, index: number) => (
                  <Text key={index}>{episode?.name}</Text>
                ))}
              </>
            )}
          </EpisodesContainer>
        )}
      </CardContainer>
    </ModalContainer>
  );
}

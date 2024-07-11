import useJazz from "../useJazz/useJazz.jsx";
import useMelodic from "../useMelodic/useMelodic.jsx";
import usePop from "../usePop/usePop.jsx";

export default function useGenreHook(genre, musicKey) {
  let useGenreHook;

  if (genre === "melodic") {
    useGenreHook = useMelodic;
  } else if (genre === "pop") {
    useGenreHook = usePop;
  } else if (genre === "jazz") {
    useGenreHook = useJazz;
  }

  const [progression, togglePlay, currentPlayingChord] = useGenreHook(musicKey);
  return [progression, togglePlay, currentPlayingChord];
}
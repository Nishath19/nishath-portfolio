import { useEffect, useRef, useState } from "react";

interface TypingState {
  wordIndex: number;
  charCount: number;
  deleting: boolean;
}

/** Cycles through `words`, typing and deleting one character at a time. */
export function useTyping(words: string[], speed = 85, pause = 1600): string {
  const [text, setText] = useState("");
  const state = useRef<TypingState>({ wordIndex: 0, charCount: 0, deleting: false });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0] ?? "");
      return;
    }

    let timer: number;

    const tick = (): void => {
      const s = state.current;
      const word = words[s.wordIndex] ?? "";
      s.charCount += s.deleting ? -1 : 1;
      setText(word.slice(0, s.charCount));

      let next = s.deleting ? speed / 2 : speed;
      if (!s.deleting && s.charCount === word.length) {
        s.deleting = true;
        next = pause;
      } else if (s.deleting && s.charCount === 0) {
        s.deleting = false;
        s.wordIndex = (s.wordIndex + 1) % words.length;
        next = 350;
      }
      timer = window.setTimeout(tick, next);
    };

    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, [words, speed, pause]);

  return text;
}

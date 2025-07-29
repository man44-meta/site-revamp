import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  words: string[];
  baseText: string;
  className?: string;
}

const TypewriterEffect = ({ words, baseText, className = '' }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(words[0].length);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(words[currentWordIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        const nextWord = words[currentWordIndex];
        if (charIndex < nextWord.length) {
          setCurrentText(nextWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {baseText} <span className="text-primary">{currentText}</span>
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypewriterEffect;
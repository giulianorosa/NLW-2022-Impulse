import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageURL from '../../assets/bug.svg'
import ideaImageURL from '../../assets/idea.svg'
import thoughtImageURL from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessSteps";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: 'Imagem de um Inseto'
    }
  },
  Idea: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      alt: 'Imagem de uma lampada'
    }
  },
  Others: {
    title: "Outros",
    image: {
      source: thoughtImageURL,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetFrom() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null)
  }

  return (
    <div className="bf-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

    { feedbackSent ? (
      <FeedbackSuccessStep 
        onFeedbackRestartRequested={handleRestartFeedback}
      />
    ) : (
      <>
        {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        onFeedbackSent={() => setFeedbackSent(true)}
        />
        )}
      </>
     )}

      <footer className="text-xs text-neutral-400">
        Feito com amor pela Rocketseat
      </footer>
    </div>
  )
}
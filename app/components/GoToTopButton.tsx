"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

export default function GoToTopButton(){
    const handleGotoTop = () => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
    return (
        <button
        onClick={handleGotoTop}
        className={`bg-primary p-2 rounded-full text-white w-[50px] h-[50px]`}
      >
        <FontAwesomeIcon icon={faArrowTurnUp} size="xl" color="white" />
      </button>
    );
}
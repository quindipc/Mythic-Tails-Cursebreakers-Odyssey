// DEPENDENCIES
import { useState, useEffect } from "react";
import axios from "axios";

// ASSETS
import buttonSound from "../../assets/music/button-sound.wav"

export default function useStoryComponent(storyURL) {
  const [currentStory, setCurrentStory] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(1);
  const [showScenario, setShowScenario] = useState([]);
  const [showChoices, setShowChoices] = useState([]);
  const [showEnding, setShowEnding] = useState([]);
  const [showSingleEnding, setShowSingleEnding] = useState({});
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [choiceSelected, setChoiceSelected] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    // FETCH SCENARIOS
    axios
      .get(`${storyURL}/alara_scenarios`)
      .then((response) => {
        setShowScenario(response.data);
      })
      .catch((error) => {
        console.error("Error fetching scenarios:", error);
      });
  
    // FETCH ENDINGS
    axios
      .get(`${storyURL}/alara_endings`)
      .then((response) => {
        setShowEnding(response.data);
      })
      .catch((error) => {
        console.error("Error fetching endings:", error);
      });
  
    // FETCH CHOICES
    axios
      .get(`${storyURL}/alara_choices`)
      .then((response) => {
        setShowChoices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching choices:", error);
      });
  }, [storyURL]);  

  const handleNextButton = () => {
    setCurrentStory((prevStory) => prevStory + 1);
  };

  useEffect(() => {
    const selectedChoice = showChoices.find(
      (choice) => choice.alara_choice_id === selectedChoiceId
    );
    if (selectedChoice) {
      if (selectedChoice.alara_next_scenario_id) {
        setCurrentScenario(selectedChoice.alara_next_scenario_id);
        setShowSingleEnding(null);
        setIsEnding(false);
      } else if (selectedChoice.alara_linked_ending_id) {
        const selectedEnding = showEnding.find(
          (ending) => ending.alara_ending_id === selectedChoice.alara_linked_ending_id
        );
        setShowSingleEnding(selectedEnding);
        setCurrentScenario(undefined);
        setIsEnding(true);
      }
    }
  }, [currentScenario, selectedChoiceId, showChoices, showEnding, showSingleEnding]);

  const buttonAudio = new Audio(buttonSound);

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoiceId(choiceId);
    setChoiceSelected(true);
    saveProgress();
    buttonAudio.play();
  };

  const handleRestart = () => {
    setCurrentStory(0);
    setCurrentScenario(1);
    setSelectedChoiceId(null);
    setChoiceSelected(false);
    setIsEnding(false);
    setShowCredits(false);
  };

  const handleEndOfDemo = () => {
    setIsEnding(false);
    setShowCredits(!showCredits);
  };

  const saveProgress = () => {
    const progress = {
      currentStory,
      currentScenario,
      selectedChoiceId,
      choiceSelected,
      isEnding,
      showCredits,
    };
    localStorage.setItem("alaraProgress", JSON.stringify(progress));
  };

  const loadProgress = () => {
    const progress = JSON.parse(localStorage.getItem("alaraProgress"));
    if (progress) {
      setCurrentStory(progress.currentStory);
      setCurrentScenario(progress.currentScenario);
      setSelectedChoiceId(progress.selectedChoiceId);
      setChoiceSelected(progress.choiceSelected);
      setIsEnding(progress.isEnding);
      setShowCredits(progress.showCredits);
    }
  };

  const clearProgress = () => {
    localStorage.removeItem("alaraProgress");
  };

  return {
    currentStory,
    currentScenario,
    showScenario,
    showChoices,
    showEnding,
    showSingleEnding,
    selectedChoiceId,
    choiceSelected,
    isEnding,
    showCredits,
    handleNextButton,
    handleChoiceSelect,
    handleRestart,
    handleEndOfDemo,
    saveProgress,
    loadProgress,
    clearProgress,
  };
}

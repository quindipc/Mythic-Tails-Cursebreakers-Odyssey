import React from "react";

export default function DarkModeToggle({ isDarkMode, handleDarkMode }) {
  return (
    <div className="game__toggle-container">
      <input
        type="checkbox"
        id="switch"
        checked={isDarkMode}
        onChange={handleDarkMode}
      />
      <label className="game__switch-label" htmlFor="switch">
        <div className="game__toggle"></div>
      </label>
    </div>
  );
}

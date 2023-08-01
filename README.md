# Mythic Tails: A Cursebreaker's Odyssey

Mythic Tails: Cursebreaker’s Odyssey is an immersive text adventure game that takes players on a captivating journey through a cursed realm. In this RPG-style game, players become heroes tasked with breaking the curse and saving the land of Ethoria. Throughout the game, players encounter mythical creatures, each plagued with unique curses, and must decide between saving the creatures or confronting the evil being behind the curse.

## Key Features

Engaging Narrative: Immerse yourself in an interactive story filled with choices that impact the outcome of the game.

Dynamic Endings: Your decisions shape the storyline, leading to multiple endings based on your choices.

## Tech Stack

Frontend: React (Vite)
Backend: Node.js, Express
Database: MySQL (Knex.js)

## Demo

**Start Game Screen**
<img width="1016" alt="Starting Game Screen" src="https://github.com/quindipc/Mythic-Tails-Cursebreakers-Odyssey/assets/72505897/f6c90cd9-cbad-484a-a9e6-478517a00cb0">

**Character Selection Screen**
<img width="1048" alt="Character Selection Screen" src="https://github.com/quindipc/Mythic-Tails-Cursebreakers-Odyssey/assets/72505897/76251988-32ff-4dcf-8e29-85da8e8ca4b2">

**Scenario & Choices Screen**
<img width="1001" alt="Scenario Choices Screen" src="https://github.com/quindipc/Mythic-Tails-Cursebreakers-Odyssey/assets/72505897/6dec174e-09eb-4ea0-8cf9-e0c38ee93e16">

**Dark Mode Toggle & Play/Pause Audio**
<img width="301" alt="Play Audio & Dark Mode Toggle" src="https://github.com/quindipc/Mythic-Tails-Cursebreakers-Odyssey/assets/72505897/74c6123f-1094-40f6-bd26-641b0143e2d5">
<img width="1019" alt="Dark Mode" src="https://github.com/quindipc/Mythic-Tails-Cursebreakers-Odyssey/assets/72505897/64c351c1-94cf-48a3-8c19-7610899bf444">

## Installation

1) Clone the repository: git clone [Mythic-Tails-Cursebreakers-Odyssey](https://github.com/quindipc/Mythic-Tails-Cursebreakers-Odyssey/tree/main)
2) Install dependencies for the client: cd client & npm install
3) Install dependencies for the server: cd server & npm install
4) Create and configure the database in the terminal
    `npx knex migrate:latest`
    `npx knex seed:run`
7) Run the development server:
    `cd client`
    `npm run dev`
9) Run the backend server:
    `cd into server`
    `npm server.js`

## How to Play

You can choose what protagonist you would like to play as: Nyx or Alara. There is a dark mode toggle if you would like to play on dark mode and there is background music that you can choose to play. You will be given two choices per scenario and each choice will lead to a certain outcome or ending. 

Nyx's storyline has 8 possible endings. 

Alara's storyline has 10 possible endings.

## Endpoints

| Endpoints | Description | Response Format |
| --- | --- | --- |
| GET Nyx Scenario by ID | /api/nyx/scenarios/:id | `{
  "id": 1,
  "name": "Scenario Name",
  "additional_story": "Additional story for the scenario",
  "story": "Main story text for the scenario",
  "choices": [
    {
      "id": 1,
      "description": "Choice description",
      "next_scenario_id": 2,
      "linked_ending_id": null
    },
    {
      "id": 2,
      "description": "Another choice description",
      "next_scenario_id": 3,
      "linked_ending_id": null
    }
  ]
}`
|
| GET Nyx Ending by ID | /api/nyx/endings/:id |` {
  "id": 1,
  "name": "Ending Name",
  "story": "Ending story text"
}`
|
| GET Alara Scenario by ID |/api/alara/scenarios/:id | `{
  "id": 1,
  "name": "Scenario Name",
  "additional_story": "Additional story for the scenario",
  "story": "Main story text for the scenario",
  "choices": [
    {
      "id": 1,
      "description": "Choice description",
      "next_scenario_id": 2,
      "linked_ending_id": null
    },
    {
      "id": 2,
      "description": "Another choice description",
      "next_scenario_id": 3,
      "linked_ending_id": null
    }
  ]
}`
|
| GET Alara Ending by ID | /api/alara/endings/:id | `{
  "id": 1,
  "name": "Ending Name",
  "story": "Ending story text"
}`
|


## Future Implementations

- Add in puzzles for the player to solve after each choice
- Integrate a combat system to fight the creatures that the player encounters on their quest, or save the creatures
- Implement a craeture management system where the player can adopt these creatures and bring them on their quest
- Each creature would be given some special skills that would help the player during combat or puzzles
- Add in user login, register and authentication for the player to save their progress
- Add in player skills, armour, and weapons
- Add in NPCS for the player to interact with on their journey
- Complete the full storyline for both Nyx & Alara

## Key Learnings 

This project really testing my skills in full stack development as well as my creativity skills. The hardest part of this project was building my database with MySQL and linking all the primary keys and foreign keys with its respective ending links, choice links, and scenario links. Styling my application is always the fun part! I enjoy adding backgronud music to give the game a more immersive feel and I wanted to make it mobile responsive for users to play it on their mobile devices. 


## Contributing

We welcome contributions from the community. If you find any bugs or have suggestions for improvements, please create an issue or submit a pull request.

## License, Credit & Attributions

Images by @isipxin & Canva
LinkedIn icon by Icons8
GitHub icon by Icons8
Music - Floating Cat by Michael Grubb

## About the developer

Hey there! My name is Chelsea Quindipan and I'm thrilled to present "Mythic Tails: Cursebreaker's Odyssey," a passion project born during my time at the Software Engineering Bootcamp at BrainStation. As a huge fan of video games, I wanted to create something special that brought back the charm of those classic story-driven and choose-your-own-adventure games that enchanted us in the past. As part of my Software Engineering Bootcamp at BrainStation, this project serves as my final Capstone endeavor, combining my technical skills and creativity to bring this fantasy world to life.

For support or inquiries, feel free to reach out to [quindipc@gmail.com].



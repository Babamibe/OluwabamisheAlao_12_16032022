# Develop an analytics dashboard with React

OpenClassrooms project 12.

## Prerequisites

- [Node.js](https://nodejs.org/en/) v16.11.1
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)
- [React](https://fr.reactjs.org/)

## Dependencies

- React v17.0.2 
`$ npx create-react-app` 
- react-dom v17.0.2
- react-router-dom v6.2.2
`$ npm install react-router-dom`
- Recharts v2.1.9
`$ npm install recharts`
- PropTypes v15.8.1
`$ npm install prop-types`

## Install Backend

- Clone the backend repository:
`git clone https://github.com/Babamibe/OluwabamisheAlao_12_16032022_Backend.git`
- Install dependencies:
`npm install`
- Launch backend (port 3000 by default):
`npm start`

## Frontend

- Clone the frontend repository:
`git clone https://github.com/Babamibe/OluwabamisheAlao_12_16032022.git`
- Install dependencies:
`npm install`
- Launch frontend (port 3001):
`npm start`
Front-end available at [http://localhost:3001](http://localhost:3001)

## Note
- The API has active data for user ids 12 and 18 (default user 12)
- [Figma source](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=1%3A2)
- for devs, available endpoints:
- `http://localhost:3001/home/id` User dashboard
- `http://localhost:3001/user/id` User main info
- `http://localhost:3001/user/id/activity`User daily activity
- `http://localhost:3001/user/id/average-sessions` User average sessions
- `http://localhost:3001/user/id/today-score` User daily score
- `http://localhost:3001/user/id/activities` User perfomance
- `http://localhost:3001/user/id/key-data` User key data
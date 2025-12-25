import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import type{ Plant } from './assets/types';

const plants: Plant[] = [
  {
    id: 1,
    name: 'Snake Plant',
    scientific: 'Sansevieria trifasciata',
    difficulty: 'Easy',
    light: 'Low',
    water: 'Low',
    rarity: 'Common',
    description: 'A hardy indoor plant that requires minimal care.'
  },
  {
    id: 2,
    name: 'Peace Lily',
    scientific: 'Spathiphyllum',
    difficulty: 'Medium',
    light: 'Medium',
    water: 'Moderate',
    rarity: 'Uncommon',
    description: 'Known for its beautiful white flowers and air-purifying qualities.'
  },
  {
    id: 3,
    name: 'Monstera',
    scientific: 'Monstera deliciosa',
    difficulty: 'Medium',
    light: 'Bright',
    water: 'Frequent',
    description: 'A popular decorative plant with large split leaves.'
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App plants={plants} />
  </React.StrictMode>
);

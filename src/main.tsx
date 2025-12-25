// src/main.tsx (or index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';            // import your root component
import type { Plant } from './assets/types';

const plants: Plant[] = [
  {
    id: 1,
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    difficulty: 'Easy',
    light: 'Low',
    water: 'Low',
    rarity: 'Common',
    description: 'A hardy indoor plant that requires minimal care.',
  },
  {
    id: 2,
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    difficulty: 'Medium',
    light: 'Medium',
    water: 'Moderate',
    rarity: 'Uncommon',
    description:
      'Known for its beautiful white flowers and air-purifying qualities.',
  },
  {
    id: 3,
    name: 'Monstera',
    scientificName: 'Monstera deliciosa',
    difficulty: 'Medium',
    light: 'Bright',
    water: 'Frequent',
    rarity: '',
    description: 'A popular decorative plant with large split leaves.',
  },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Option A: App manages its own initial plants */}
    <App />

    {/* Option B: if App expects a prop, use:
        <App initialPlants={plants} />
    */}
  </React.StrictMode>
);
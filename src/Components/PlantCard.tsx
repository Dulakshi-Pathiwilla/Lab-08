import React from 'react';
import type { Plant } from '../assets/types';

type PlantCardProps = {
  plant: Plant;
};

const lightIcons = {
  Low: '🌞',
  Medium: '🌞🌞',
  Bright: '🌞🌞🌞'
};

const waterIcons = {
  Low: '💧',
  Moderate: '💧💧',
  Frequent: '💧💧💧'
};

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{plant.name} {plant.scientific && <small>({plant.scientific})</small>}</h5>
        <p className="card-text">{plant.description}</p>

        <div className="mb-2">
          <span className={`badge bg-${plant.difficulty === 'Easy' ? 'success' : plant.difficulty === 'Medium' ? 'warning' : 'danger'} me-1`}>
            {plant.difficulty}
          </span>
          {plant.rarity && <span className={`badge bg-${plant.rarity === 'Common' ? 'secondary' : plant.rarity === 'Uncommon' ? 'warning' : 'info'}`}>{plant.rarity}</span>}
        </div>

        <div className="mb-2">
          <strong>Light: </strong>{lightIcons[plant.light]}
        </div>
        <div className="mb-3">
          <strong>Water: </strong>{waterIcons[plant.water]}
        </div>

        <button className="btn btn-outline-primary me-2" disabled>View</button>
        <button className="btn btn-outline-danger" disabled>Buy (UI-only)</button>
      </div>
    </div>
  );
};

export default PlantCard;

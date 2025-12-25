import React from 'react';
import type { Plant } from '../assets/types';

type PlantListProps = {
  plants: Plant[];
  selectedId?: number;
  onSelect: (id: number) => void;
};

const difficultyColors = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'danger'
};

const rarityColors = {
  Common: 'secondary',
  Uncommon: 'warning',
  Rare: 'info'
};

const PlantList: React.FC<PlantListProps> = ({ plants, selectedId, onSelect }) => {
  return (
    <ul className="list-group">
      {plants.map((plant) => (
        <li
          key={plant.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            selectedId === plant.id ? 'active' : ''
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => onSelect(plant.id)}
        >
          <div>
            <strong>{plant.name}</strong> <em>{plant.scientific}</em>
          </div>
          <div>
            <span className={`badge bg-${difficultyColors[plant.difficulty]} me-1`}>{plant.difficulty}</span>
            {plant.rarity && <span className={`badge bg-${rarityColors[plant.rarity]}`}>{plant.rarity}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PlantList;

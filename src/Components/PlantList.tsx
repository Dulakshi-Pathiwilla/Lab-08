import React from 'react';
import type { Plant } from '../assets/types';

interface PlantListProps {
  plants: Plant[];
  selectedId: number | null;
  onSelect: (plant: Plant) => void;
}

const PlantList: React.FC<PlantListProps> = ({
  plants,
  selectedId,
  onSelect,
}) => {
  if (plants.length === 0) {
    return (
      <div className="list-group">
        <div className="list-group-item text-muted">No plants found.</div>
      </div>
    );
  }

  return (
    <div className="list-group">
      {plants.map((plant) => (
        <button
          key={plant.id}
          type="button"
          className={
            'list-group-item list-group-item-action ' +
              (plant.id === selectedId ? 'active active-green' : '')
          }
          onClick={() => onSelect(plant)}
        >
        <div className="fw-semibold">{plant.name}</div>
        <small
          className={
          plant.id === selectedId ? 'text-white-50' : 'text-muted'
        }
        >
          {plant.scientificName}
          </small>
        </button>
      ))}
    </div>
  );
};

export default PlantList;
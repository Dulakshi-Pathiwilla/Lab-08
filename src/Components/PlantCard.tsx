import React from 'react';
import type { Plant } from '../assets/types';

interface PlantCardProps {
  plant: Plant;
  onDelete: (id: number) => void;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onDelete }) => {
  const handleViewDetails = () => {
    window.alert(`Details for ${plant.name}`);
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title mb-1">
          {plant.name}{' '}
          <small className="text-muted fst-italic">
            ({plant.scientificName})
          </small>
        </h5>

        <p className="card-text">{plant.description}</p>

        <div className="mb-2">
          <span className="badge bg-primary me-2">{plant.difficulty}</span>
          <span className="badge bg-warning text-dark">{plant.rarity}</span>
        </div>

        <div className="mb-3">
          <div className="d-flex align-items-center mb-1">
            <i className="bi bi-sun-fill text-warning me-2" aria-hidden="true" />
            <small>
              <strong>Light:</strong> {plant.light}
            </small>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-droplet-fill text-primary me-2" aria-hidden="true" />
            <small>
              <strong>Water:</strong> {plant.water}
            </small>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={handleViewDetails}
          >
            View Details
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(plant.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
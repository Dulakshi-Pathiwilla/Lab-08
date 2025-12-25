import React, { type FormEvent, useState } from 'react';
import type { Plant } from '../assets/types';

type PlantInput = Omit<Plant, 'id'>;

interface PlantFormProps {
  onAdd: (plant: PlantInput) => void;
}

const PlantForm: React.FC<PlantFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [light, setLight] = useState('Bright');
  const [water, setWater] = useState('Moderate');
  const [rarity, setRarity] = useState('Common');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setName('');
    setScientificName('');
    setDifficulty('Easy');
    setLight('Bright');
    setWater('Moderate');
    setRarity('Common');
    setDescription('');
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Plant name is required.');
      return;
    }

    const newPlant: PlantInput = {
      name: name.trim(),
      scientificName: scientificName.trim(),
      difficulty,
      light,
      water,
      rarity,
      description: description.trim(),
    };

    onAdd(newPlant);
    resetForm();
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title mb-3">Add New Plant</h5>

        {error && (
          <div className="alert alert-danger py-2" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-2 mb-2">
            <div className="col-md-6">
              <label className="form-label">Plant name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Scientific name</label>
              <input
                type="text"
                className="form-control"
                value={scientificName}
                onChange={(e) => setScientificName(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-2 mb-2">
            <div className="col-md-4">
              <label className="form-label">Difficulty</label>
              <select
                className="form-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Light</label>
              <select
                className="form-select"
                value={light}
                onChange={(e) => setLight(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>Bright</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Water</label>
              <select
                className="form-select"
                value={water}
                onChange={(e) => setWater(e.target.value)}
              >
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label">Rarity</label>
            <select
              className="form-select"
              value={rarity}
              onChange={(e) => setRarity(e.target.value)}
            >
              <option>Common</option>
              <option>Uncommon</option>
              <option>Rare</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              Add Plant
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={resetForm}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantForm;
import React, { useState } from 'react';
import type { Plant } from '../assets/types';

type PlantFormProps = {
  onAdd?: (plant: Plant) => void;
};

const PlantForm: React.FC<PlantFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [scientific, setScientific] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [light, setLight] = useState('Low');
  const [water, setWater] = useState('Low');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!name) return;
    const newPlant: Plant = {
      id: Date.now(),
      name,
      scientific,
      difficulty: difficulty as Plant['difficulty'],
      light: light as Plant['light'],
      water: water as Plant['water'],
      description
    };
    onAdd?.(newPlant);
    setName('');
    setScientific('');
    setDifficulty('Easy');
    setLight('Low');
    setWater('Low');
    setDescription('');
  };

  return (
    <div className="card p-3 mb-3">
      <h6>Add New Plant (UI-only)</h6>
      <input className="form-control mb-2" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="form-control mb-2" placeholder="Scientific name" value={scientific} onChange={(e) => setScientific(e.target.value)} />
      <div className="d-flex mb-2 gap-2">
        <select className="form-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select className="form-select" value={light} onChange={(e) => setLight(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>Bright</option>
        </select>
        <select className="form-select" value={water} onChange={(e) => setWater(e.target.value)}>
          <option>Low</option>
          <option>Moderate</option>
          <option>Frequent</option>
        </select>
      </div>
      <textarea className="form-control mb-2" placeholder="Short description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={handleAdd}>Add Plant</button>
        <button className="btn btn-secondary" onClick={() => { setName(''); setScientific(''); setDifficulty('Easy'); setLight('Low'); setWater('Low'); setDescription(''); }}>Clear</button>
      </div>
    </div>
  );
};

export default PlantForm;

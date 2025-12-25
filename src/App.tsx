import React, { useState } from 'react';
import type { Plant } from './assets/types';
import PlantList from './Components/PlantList';
import PlantCard from './Components/PlantCard';
import PlantForm from './Components/PlantForm';
import SearchBar from './Components/SearchBar';

type AppProps = {
  plants: Plant[];
};

const App: React.FC<AppProps> = ({ plants: initialPlants }) => {
  const [plants, setPlants] = useState(initialPlants);
  const [selectedId, setSelectedId] = useState<number>();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlants = plants.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const selectedPlant = plants.find(p => p.id === selectedId);

  return (
    <div className="container mt-4">
      <h3 style={{ textAlign: "center" }}><b>Mini Indoor Plant Nursery</b></h3>
      <div className="row mt-3">
        <div className="col-md-4">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <PlantList plants={filteredPlants} selectedId={selectedId} onSelect={setSelectedId} />
          <button className="btn btn-secondary mt-2 w-100" onClick={() => setSelectedId(undefined)}>Reset Selection (UI-only)</button>
        </div>
        <div className="col-md-8">
          <PlantForm onAdd={(newPlant) => setPlants([...plants, newPlant])} />
          {selectedPlant && <PlantCard plant={selectedPlant} />}
        </div>
      </div>
    </div>
  );
};

export default App;

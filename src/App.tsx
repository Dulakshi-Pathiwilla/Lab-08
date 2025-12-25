import React, { useMemo, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import PlantList from './Components/PlantList';
import PlantForm from './Components/PlantForm';
import PlantCard from './Components/PlantCard';
import PeopleDropdown from './Components/PeopleDropDown';
import type { Plant } from './assets/types';

type PlantInput = Omit<Plant, 'id'>;

const initialPlants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    difficulty: 'Medium',
    light: 'Bright',
    water: 'Moderate',
    rarity: 'Uncommon',
    description: 'Known for its iconic split leaves and tropical look.',
  },
  {
    id: 2,
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    difficulty: 'Easy',
    light: 'Low to Bright',
    water: 'Low',
    rarity: 'Common',
    description: 'Very tolerant and perfect for beginners.',
  },
];

const App: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(
    initialPlants[0] ?? null
  );
  const [searchText, setSearchText] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<
    'All' | 'Easy' | 'Medium' | 'Hard'
  >('All');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAdd = (plant: PlantInput) => {
    const newPlant: Plant = {
      id: Date.now(),
      ...plant,
    };

    setPlants((prev) => [...prev, newPlant]);
    setSelectedPlant(newPlant);
    setSuccessMessage('Plant added successfully.');
  };

  const handleDelete = (id: number) => {
    setPlants((prev) => prev.filter((p) => p.id !== id));
    setSelectedPlant((current) => (current && current.id === id ? null : current));
    setSuccessMessage('Plant removed.');
  };

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch = plant.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesDifficulty =
        difficultyFilter === 'All' || plant.difficulty === difficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }, [plants, searchText, difficultyFilter]);

  const resetFilters = () => {
    setSearchText('');
    setDifficultyFilter('All');
  };

  return (
    <>
      <Header />

      <main className="container my-4">
        <Banner>
          <h2 className="mb-1">Welcome to the Mini Nursery</h2>
          <p className="mb-0 text-muted">
            Manage your plant collection efficiently and effortlessly.
          </p>
        </Banner>

        {successMessage && (
          <div className="alert alert-success py-2" role="alert">
            {successMessage}
          </div>
        )}

        <div className="row mt-3">
          {/* Left column */}
          <div className="col-md-4 mb-4">
            {/* Search */}
            <div className="mb-3">
              <label className="form-label">Search plants...</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search plants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {/* Plant list */}
            <PlantList
              plants={filteredPlants}
              selectedId={selectedPlant ? selectedPlant.id : null}
              onSelect={(plant) => setSelectedPlant(plant)}
            />

            {/* People dropdown */}
            <PeopleDropdown onSelect={() => {}} />

            {/* Difficulty filter + reset */}
            <div className="mt-3 d-flex align-items-end gap-2">
              <div className="flex-grow-1">
                <label className="form-label">Difficulty</label>
                <select
                  className="form-select"
                  value={difficultyFilter}
                  onChange={(e) =>
                    setDifficultyFilter(
                      e.target.value as 'All' | 'Easy' | 'Medium' | 'Hard'
                    )
                  }
                >
                  <option value="All">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <button
                type="button"
                className="btn btn-outline-secondary mt-3"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="col-md-8">
            <PlantForm onAdd={handleAdd} />

            {selectedPlant && (
              <PlantCard plant={selectedPlant} onDelete={handleDelete} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
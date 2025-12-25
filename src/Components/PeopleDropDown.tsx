import React, { useEffect, useState } from 'react';
import type { User } from '../Services/UserService';
import { getUsers } from '../Services/UserService';

interface PeopleDropdownProps {
  onSelect?: (user: User | null) => void;
}

const PeopleDropdown: React.FC<PeopleDropdownProps> = ({ onSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedId, setSelectedId] = useState<number | ''>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUsers();
        setUsers(data);
      } catch {
        setError('Failed to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (!value) {
      setSelectedId('');
      setSelectedUser(null);
      onSelect?.(null);
      return;
    }

    const id = Number(value);
    setSelectedId(id);
    const user = users.find((u) => u.id === id) || null;
    setSelectedUser(user);
    onSelect?.(user);
  };

  return (
    <div className="mt-3">
      <label className="form-label">Select a person</label>

      {loading && (
        <div className="d-flex align-items-center mb-2">
          <div className="spinner-border spinner-border-sm me-2" role="status" />
          <span>Loading users...</span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && (
        <select
          className="form-select mb-2"
          value={selectedId}
          onChange={handleChange}
        >
          <option value="">-- Choose a user --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      )}

      {selectedUser && (
        <div className="card">
          <div className="card-body">
            <h6 className="card-title mb-1">{selectedUser.name}</h6>
            {selectedUser.email && (
              <p className="mb-1">
                <strong>Email:</strong> {selectedUser.email}
              </p>
            )}
            {selectedUser.phone && (
              <p className="mb-1">
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
            )}
            {selectedUser.company?.name && (
              <p className="mb-0">
                <strong>Company:</strong> {selectedUser.company.name}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleDropdown;
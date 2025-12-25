import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
  };
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(BASE_URL);
  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${BASE_URL}/${id}`);
  return response.data;
};
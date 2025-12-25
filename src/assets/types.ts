export type Plant = {
  id: number;
  name: string;
  scientific?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  light: 'Low' | 'Medium' | 'Bright';
  water: 'Low' | 'Moderate' | 'Frequent';
  rarity?: 'Common' | 'Uncommon' | 'Rare';
  description: string;
};

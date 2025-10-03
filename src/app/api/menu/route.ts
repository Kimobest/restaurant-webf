import { NextResponse } from 'next/server';

const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato, mozzarella, and basil.',
    price: 12.99,
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan, croutons, Caesar dressing.',
    price: 8.50,
  },
  {
    id: 3,
    name: 'Spaghetti Carbonara',
    description: 'Pasta with pancetta, egg, and parmesan.',
    price: 14.00,
  },
];

export async function GET() {
  return NextResponse.json(menuItems);
}

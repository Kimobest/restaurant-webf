-- Sample SQL dataset for restaurant

CREATE TABLE menu_items (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price DECIMAL(6,2)
);

INSERT INTO menu_items (id, name, description, price) VALUES
  (1, 'Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil.', 12.99),
  (2, 'Caesar Salad', 'Crisp romaine lettuce, parmesan, croutons, Caesar dressing.', 8.50),
  (3, 'Spaghetti Carbonara', 'Pasta with pancetta, egg, and parmesan.', 14.00);

CREATE TABLE reservations (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  date DATE,
  time TIME,
  guests INT
);

INSERT INTO reservations (id, name, date, time, guests) VALUES
  (1, 'Alice Smith', '2025-10-01', '19:00', 2),
  (2, 'Bob Johnson', '2025-10-02', '20:00', 4);

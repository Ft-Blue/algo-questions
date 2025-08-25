/** 
 * Given an array of order objects for a restaurant,
 * each with a table number and a list of ordered items,
 * write a function that returns an object mapping each table number 
 * to a summary of how many times each item was ordered at that table.

Example:

const orders = [
  { table: 1, items: ["burger", "fries"] },
  { table: 2, items: ["burger", "burger", "fries"] },
  { table: 1, items: ["salad"] },
  { table: 2, items: ["fries"] }
];

> orderSummary(orders)
{
  1: { burger: 1, fries: 1, salad: 1 },
  2: { burger: 2, fries: 2 }
} */

type Order = {
  table: number;
  items: string[];
};

type OrderSummary = Record<number, Record<string, number>>;

const orderSummary = (orders: Order[]) => {
  return orders.reduce((acc, order) => {
    const { table, items } = order;
    if (!acc[table]) acc[table] = {};

    items.forEach((item) => {
      if (!acc[table][item]) acc[table][item] = 0;
      acc[table][item] += 1;
    });

    return acc;
  }, {} as OrderSummary);
};

const orders = [
  { table: 1, items: ["burger", "fries"] },
  { table: 2, items: ["burger", "burger", "fries"] },
  { table: 1, items: ["salad"] },
  { table: 2, items: ["fries"] },
];

console.log(orderSummary(orders));

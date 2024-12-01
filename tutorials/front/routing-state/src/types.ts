interface Pizza {
  id: number;
  title: string;
  content: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  title: string;
  image: string;
  volume: string;
  price: string;
}

interface PizzeriaContext {
  pizzas: Pizza[];
  setPizzas: (pizzas: Pizza[]) => void;
  addPizza: (newPizza: NewPizza) => void;
  actionToBePerformed: boolean;
  setActionToBePerformed: (action: boolean) => void;
  clearActionToBePerformed: () => void;
  drinks: Drink[];
}

export type { Pizza, NewPizza, Drink, PizzeriaContext };

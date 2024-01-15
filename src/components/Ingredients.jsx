/* import { Fraction } from 'fractional'; */

function Ingredients({ ing, servings, newServing }) {
  const { quantity, unit, description } = ing;

  const newQuantity = (quantity / servings) * newServing;

  /*   const fractioned = new Fraction(newQuantity).toString(); */

  return (
    <div className="flex w-[45%] items-center justify-between gap-3">
      <span>{newQuantity} </span>
      <span>{unit} </span>
      <span>{description} </span>
    </div>
  );
}

export default Ingredients;

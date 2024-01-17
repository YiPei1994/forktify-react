/* import { Fraction } from 'fractional'; */
import { FaCheck } from 'react-icons/fa6';

function Ingredients({ ing, servings, newServing }) {
  const { quantity, unit, description } = ing;

  const newQuantity = (quantity / servings) * newServing;

  /*   const fractioned = new Fraction(newQuantity).toString(); */

  return (
    <div className="relative flex w-[48%]  py-1 text-sm">
      <FaCheck className=" w-[35px] text-xl text-red-400" />
      <div className=" mx-3 flex w-[100px]">
        <span>{newQuantity ? newQuantity : ''}</span>
        <span className="mx-3">{unit ? unit : ''}</span>
      </div>
      <span className="w-[300px]">{description}</span>
    </div>
  );
}

export default Ingredients;

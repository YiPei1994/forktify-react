function Ingredients({ ing }) {
  const { quantity, unit, description } = ing;
  return (
    <div className="flex w-[45%] items-center justify-between gap-3">
      <span>{quantity ? quantity : ''} </span>
      <span>{unit} </span>
      <span>{description} </span>
    </div>
  );
}

export default Ingredients;

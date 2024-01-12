import { useForm } from 'react-hook-form';
import { useAddRecipe } from '../hooks/useAddRecipe';
import { useForkify } from '../hooks/useForkify';
import { useEffect, useState } from 'react';
import { guidGenerator } from '../helpers/randomId';

function AddRecipe() {
  const { handleAddBookmarked } = useForkify();
  const { register, handleSubmit } = useForm();
  const { addRecipe } = useAddRecipe();
  const [guId, setGuId] = useState(0);
  const test = 'test';

  useEffect(() => {
    setGuId(guidGenerator());
  }, []);

  function onSubmit(data) {
    if (!data) return;

    addRecipe(data);
    handleAddBookmarked(data);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-between py-10"
      >
        <div className="w-[40%] text-orange-900">
          <div className="flex">
            <p className="uppercase">Recipe Data</p>
            <input type="hidden" value={guId} id="guid" {...register('guid')} />
          </div>
          <div className="flex w-full items-center">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" {...register('title')} value={test} />
          </div>
          <div>
            <label htmlFor="url">Url</label>
            <input type="text" id="url" {...register('url')} value={test} />
          </div>
          <div>
            <label htmlFor="img_url">Image Url</label>
            <input
              type="text"
              id="img_url"
              {...register('img_url')}
              value={test}
            />
          </div>
          <div>
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              id="publisher"
              {...register('publisher')}
              value={test}
            />
          </div>
          <div>
            <label htmlFor="prep_time">Prep time</label>
            <input
              type="text"
              id="prep_time"
              {...register('prep_time')}
              value={test}
            />
          </div>
          <div>
            <label htmlFor="servings">Servings</label>
            <input
              type="text"
              id="servings"
              {...register('servings')}
              value={test}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Ingredients</p>
          </div>
          <div>
            <label htmlFor="ingredient1">ingredient 1</label>
            <input
              type="text"
              id="ingredient1"
              defaultValue="0.5,kg,Rice"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient1')}
            />
          </div>
          <div>
            <label htmlFor="ingredient2">ingredient 2</label>
            <input
              type="text"
              id="ingredient2"
              value={test}
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient2')}
            />
          </div>
          <div>
            <label htmlFor="ingredient3">ingredient 3</label>
            <input
              type="text"
              id="ingredient3"
              value={test}
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient3')}
            />
          </div>
          <div>
            <label htmlFor="ingredient4">ingredient 4</label>
            <input
              type="text"
              id="ingredient4"
              value={test}
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient4')}
            />
          </div>
          <div>
            <label htmlFor="ingredient5">ingredient 5</label>
            <input
              type="text"
              id="ingredient5"
              value={test}
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient5')}
            />
          </div>
          <div>
            <label htmlFor="ingredient6">ingredient 6</label>
            <input
              type="text"
              id="ingredient6"
              value={test}
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient6')}
            />
          </div>
        </div>
        <div className="w-full">
          <button>Upload</button>
        </div>
      </form>
    </>
  );
}

export default AddRecipe;

import { useForm } from 'react-hook-form';
import { useAddRecipe } from '../hooks/useAddRecipe';
import { useForkify } from '../hooks/useForkify';

function AddRecipe() {
  const { handleAddBookmarked } = useForkify();
  const { register, handleSubmit } = useForm();
  const { addRecipe } = useAddRecipe();
  const test = 'test';
  function onSubmit(data) {
    if (!data) return;
    console.log(data);
    addRecipe(data);
    /*    handleAddBookmarked(data); */
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <p>Recipe Data</p>
        </div>
        <div>
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
      <div>
        <button>Upload</button>
      </div>
    </form>
  );
}

export default AddRecipe;

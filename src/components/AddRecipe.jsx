import { useForm } from 'react-hook-form';
import { useAddRecipe } from '../hooks/useAddRecipe';

import { IoCloudUploadOutline } from 'react-icons/io5';

function AddRecipe() {
  const { register, handleSubmit } = useForm();
  const { addRecipe } = useAddRecipe();

  function onSubmit(data) {
    if (!data) return;

    addRecipe(data);

    /*  handleAddBookmarked(data); */
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[1000px] flex-wrap  justify-between  p-10"
      >
        <div className="flex w-[48%] flex-col gap-4 text-yellow-950">
          <div className="flex">
            <p className="my-2 text-2xl uppercase">Recipe Data</p>
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="title">Title</label>
            <input
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              type="text"
              id="title"
              {...register('title')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="url">Url</label>
            <input
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              type="text"
              id="url"
              {...register('url')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="img_url">Image Url</label>
            <input
              type="text"
              id="img_url"
              name="image"
              {...register('image_url')}
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              id="publisher"
              {...register('publisher')}
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="prep_time">Prep time</label>
            <input
              type="text"
              id="prep_time"
              {...register('prep_time')}
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="servings">Servings</label>
            <input
              type="text"
              id="servings"
              {...register('servings')}
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
            />
          </div>
        </div>
        <div className="flex w-[48%] flex-col gap-4 text-orange-950">
          <div className="flex">
            <p className="my-2 text-2xl uppercase">Ingredients</p>
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="ingredient1">Ingredient 1</label>
            <input
              type="text"
              id="ingredient1"
              defaultValue="0.5,kg,Rice"
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient1')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="ingredient2">Ingredient 2</label>
            <input
              type="text"
              id="ingredient2"
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient2')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="ingredient3">Ingredient 3</label>
            <input
              type="text"
              id="ingredient3"
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient3')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="ingredient4">Ingredient 4</label>
            <input
              type="text"
              id="ingredient4"
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient4')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="ingredient5">Ingredient 5</label>
            <input
              type="text"
              id="ingredient5"
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient5')}
            />
          </div>
          <div className="flex w-full items-center  justify-between">
            <label htmlFor="ingredient6">Ingredient 6</label>
            <input
              type="text"
              id="ingredient6"
              className="w-[70%] rounded-md border-[1px] border-yellow-950/10 px-2 py-1  uppercase text-slate-800 outline-none transition-all  focus:border-red-400 focus:bg-red-50"
              placeholder="Format: Quantity, Unit, Description"
              {...register('ingredient6')}
            />
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center">
          <button
            disabled={true}
            className="flex w-auto items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-red-300 px-8 py-4 uppercase	text-white transition-all hover:scale-105"
          >
            <IoCloudUploadOutline className="mr-2 h-5 w-5" />
            <span>Upload (Disabled)</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default AddRecipe;

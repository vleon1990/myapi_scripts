import { categorys } from "../data/categorys";

const handleFilter = () => {
    
    alert('Under construction!')
  }

const Categorias = () =>
    
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {categorys.map((category, i) => (
        <div  key={i} className="flex flex-col">
        <button
        onClick={handleFilter}
        className="flex items-baseline justify-start pl-7 bg-gray-200 py-2 rounded-md hover:bg-gray-300"
      >
        <span className=" text-xl mr-4" role={'img'} aria-label={category.imagen}>
           <img className="w-4 h-4" src={category.imagen} />
        </span>
        <p>{category.nombre}</p>
      </button>
        </div>
        )).slice(0,20)}
        </div>
    </>
export default Categorias
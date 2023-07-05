import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <section className="mx-3 sm:mx-32">
      <div className="my-3 flex items-center justify-center">
        <h3 className="text-2xl text-white"> {category} </h3>
      </div>

      {loading && <p>Loading</p>}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </section>
  );
};

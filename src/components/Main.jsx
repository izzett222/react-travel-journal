import Card from "./Card";
import data from "./data";
export default function Main() {
  return (
    <main className="px-10 mt-11 flex flex-col gap-5">
      {data.map((el) => {
        return <Card key={el.id} {...el} />;
      })}
    </main>
  );
}

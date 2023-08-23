import getData from "./api/route";
import UseTable from "./components/useTable";

export default async function Home() {
  const res = await getData();
  return (
    <div>
      <UseTable res={res}/>
    </div>
  );
}

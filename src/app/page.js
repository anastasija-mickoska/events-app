import Events from "../../components/Events";
import HomePage from "../../components/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomePage />
      <Events />
    </div>
  );
}

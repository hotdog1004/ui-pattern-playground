import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">UI 패턴 플레이그라운드</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/modal">Modal 패턴</Link>
        <Link to="/text-field">TextField 패턴</Link>
      </nav>
    </div>
  );
};

export default HomePage;

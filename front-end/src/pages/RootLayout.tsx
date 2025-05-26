
import { Outlet, Link } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/my-travels">Minhas Viagens</Link> | 
          <Link to="/promotions">Promoções</Link> | 
          <Link to="/support">Suporte</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* <- Aqui entram as rotas filhas */}
      </main>
    </div>
  );
};



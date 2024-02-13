import { Banner } from './components/banner/Banner.jsx';
import { Promo } from './components/promo/Promo.jsx';
import { PopularCardsList } from './components/CardsList/PopularCardsList.jsx';
import { NewCardsList } from './components/CardsList/NewCardsList';

export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <PopularCardsList/>
      <NewCardsList/>
      <Promo/>
    </main>
  );
}

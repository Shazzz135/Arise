
import Loading from './pages/Loading';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import FadeTransition from './utils/FadeTransition';


function App() {
  const [show, setShow] = useState<'loading' | 'home'>('loading');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 3000);
    const t2 = setTimeout(() => setShow('home'), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="bg-black min-h-screen w-full">
      <FadeTransition show={show === 'loading' && !fade} duration={500}>
        {show === 'loading' && <Loading />}
      </FadeTransition>
      <FadeTransition show={show === 'home'} duration={600}>
        {show === 'home' && <Home />}
      </FadeTransition>
    </div>
  );
}

export default App

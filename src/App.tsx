import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import ShowMovie from './components/show-movie/show-movie';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [films, setFilms] = useState<Object>({});

  const handleSidebarOpen = () => {
    setOpenSidebar(!openSidebar)
  }

  // todo: fix use effect

  // const fetchFilm = async () => {
  //   try {
  //     const fetchData = await fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=it-IT`);
  //     const response = await fetchData.json();
  //     console.log(response)

  //     await setFilms(response);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchFilm();
  // })

  return (
    <main className="App min-h-screen w-full bg-gray-100 text-gray-700">
      <Navbar 
        handleSidebarOpen={handleSidebarOpen}
      />
      <div className='flex gap-4'>
        <aside>
          <Sidebar 
            open={openSidebar}
          />
        </aside>

        <div className='w-full pt-4'>
          <h1 className='text-2xl'>Film piú popolari: </h1>
          <div className='flex items-start justify-start'>
            {films && (
              <ShowMovie 
                films={films}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

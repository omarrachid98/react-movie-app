import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(!openSidebar)
  }

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
        <div>
          <p>Testo di esempio</p>
        </div>
      </div>
    </main>
  );
}

export default App;

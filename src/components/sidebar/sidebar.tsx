const Sidebar = ({open} : {open: boolean}) => {

    return (
        <>
        {open && (
            <div className="flex">
                <aside className="flex w-48 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style={{height: '100vh'}}
                x-show="asideOpen">
                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"></span>
                        <span>Menu 1</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"></span>
                        <span>Menu 2</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"></span>
                        <span>Menu 3</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"></span>
                        <span>Menu 4</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"></span>
                        <span>Menu 5</span>
                    </a>
                </aside>
            </div>
        )}
        </>
    )
}

export default Sidebar;
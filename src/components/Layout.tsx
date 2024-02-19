import { Outlet } from 'react-router'

import { SideNav } from './SideNav'

interface IProductsProps {}

export const Layout: React.FC<IProductsProps> = () => {
  return (
    <div className="grid h-screen grid-cols-4 grid-rows-1 gap-4 p-4">
      <SideNav />
      <main
        className="col-start-2 col-end-5 row-start-1 row-end-3 overflow-y-auto bg-secondary p-4
          text-secondary-foreground"
      >
        <Outlet />
      </main>
    </div>
  )
}

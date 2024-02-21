import { Outlet } from 'react-router'

import { SideNav } from '../components/SideNav'

interface IProductsProps {}

export const Layout: React.FC<IProductsProps> = () => {
  return (
    <div className="h-screen gap-4 p-4 md:grid md:grid-cols-4 md:grid-rows-5">
      <SideNav />
      <main
        className="h-full overflow-y-auto bg-secondary p-4 text-secondary-foreground md:col-start-2
          md:col-end-5 md:row-start-1 md:row-end-8 md:h-auto"
      >
        <Outlet />
      </main>
    </div>
  )
}

Layout.displayName = 'Layout'

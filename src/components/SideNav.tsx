import { Link, useLocation } from 'react-router-dom'

import { ROUTES } from '@/config'
import { cn } from '@/utils/tailwindUtil'

export const SideNav = () => {
  const { pathname } = useLocation()
  const routesKeys = Object.keys(ROUTES)

  return (
    <aside
      className="bg-primary p-4 text-center text-primary-foreground md:col-start-1 md:col-end-2
        md:row-start-1 md:row-end-8"
    >
      <nav className="mt-5">
        <ul className="flex items-center justify-center gap-5 md:flex-col">
          {routesKeys.map((key: string) => {
            const route = ROUTES[key as keyof typeof ROUTES]
            return (
              !route.NAV_ITEM_HIDDEN && (
                <li key={route.PATH}>
                  <Link
                    className={cn(
                      route.PATH === pathname && 'underline',
                      'md:text-2xl',
                      'tracking-widest'
                    )}
                    to={route.PATH}
                  >
                    {route.LABEL}
                  </Link>
                </li>
              )
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

SideNav.displayName = 'SideNav'

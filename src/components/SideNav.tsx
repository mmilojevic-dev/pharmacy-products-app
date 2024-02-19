import { Link } from 'react-router-dom'

interface ISideNavProps {}

export const SideNav: React.FC<ISideNavProps> = () => {
  return (
    <aside
      className="col-start-1 col-end-2 row-start-1 row-end-3 bg-primary p-4
        text-primary-foreground"
    >
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

import { dateStringToFormat } from '@/utils/dateStringToFormat'

export const GENERAL = {
  CURRENCY: '€'
}

export const ROUTES = {
  HOME: {
    LABEL: '',
    PATH: '/'
  },
  PRODUCTS: {
    LABEL: 'Products',
    PATH: '/products'
  },
  ABOUT: {
    LABEL: 'About',
    PATH: '/about'
  },
  STATISTICS: {
    LABEL: 'Statistics',
    PATH: '/statistics'
  }
}
export const HOME = {
  TITLE: 'Welcome - manage your pharmacy products.'
}
export const PRODUCTS = {
  TITLE: 'Products',
  INITIAL_DATA: [
    {
      id: 'product1',
      name: 'Product1',
      manufacturer: { id: 'manufacturer1', name: 'Manufacturer1' },
      price: 10,
      expiryDate: new Date('2025-02-28T15:45:30.000Z')
    },
    {
      id: 'product2',
      name: 'Product2',
      manufacturer: { id: 'manufacturer2', name: 'Manufacturer2' },
      price: 20,
      expiryDate: new Date('2025-09-15T08:00:00.000Z')
    },
    {
      id: 'product3',
      name: 'Product3',
      manufacturer: { id: 'manufacturer3', name: 'Manufacturer3' },
      price: 30,
      expiryDate: new Date('2026-12-10T18:20:10.000Z')
    }
  ],
  DATA_TABLE: {
    COLUMNS: [
      { key: 'name', headerLabel: 'Name' },
      { key: 'manufacturer', headerLabel: 'Manufacturer', nestedKey: 'name' },
      { key: 'price', headerLabel: 'Price', suffix: GENERAL.CURRENCY },
      {
        key: 'expiryDate',
        headerLabel: 'Expiry Date',
        formatFn: dateStringToFormat
      },
      { key: '', headerLabel: 'Actions' }
    ]
  }
}
export const ABOUT = {
  TITLE: 'Products',
  AUTHOR: 'Miloš Milojević',
  VERSION: '0.1.0',
  APP_NAME: 'Pharmacy Products App',
  APP_DESCRIPTION:
    'React app with CRUD operations on pharmacy products and rendering additional data through the charts with persisting products in browser memory (localStorage).'
}

export const STATISTICS = {
  TITLE: 'Statistics',
  BAR_CHART: {
    TITLE: 'Prices of the medicines',
    Y_AXIS: 'Medicine prices',
    X_AXIS: 'Medicines'
  },
  PIE_CHART: {
    TITLE: 'Manufacturer products count'
  }
}

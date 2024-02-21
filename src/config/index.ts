import { dateStringToFormat } from '@/utils/dateStringToFormat'

export const GENERAL = {
  PRODUCT: 'Product',
  PRODUCTS: 'Products',
  CURRENCY: '€'
}

export const ROUTES = {
  HOME: {
    LABEL: '',
    PATH: '/',
    NAV_ITEM_HIDDEN: false
  },
  PRODUCTS: {
    LABEL: 'Products',
    PATH: '/products',
    NAV_ITEM_HIDDEN: false
  },
  ABOUT: {
    LABEL: 'About',
    PATH: '/about',
    NAV_ITEM_HIDDEN: false
  },
  STATISTICS: {
    LABEL: 'Statistics',
    PATH: '/statistics',
    NAV_ITEM_HIDDEN: false
  },
  CREATE_PRODUCT: {
    LABEL: 'Create New',
    PATH: '/products/create',
    NAV_ITEM_HIDDEN: true
  },
  UPDATE_PRODUCT: {
    LABEL: 'Update',
    PATH: '/products/update',
    NAV_ITEM_HIDDEN: true
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
    },
    {
      id: 'product4',
      name: 'Product4',
      manufacturer: { id: 'manufacturer4', name: 'Manufacturer4' },
      price: 100,
      expiryDate: new Date('2025-06-28T15:45:30.000Z')
    },
    {
      id: 'product5',
      name: 'Product5',
      manufacturer: { id: 'manufacturer5', name: 'Manufacturer5' },
      price: 50,
      expiryDate: new Date('2025-05-18T08:00:00.000Z')
    },
    {
      id: 'product6',
      name: 'Product6',
      manufacturer: { id: 'manufacturer6', name: 'Manufacturer6' },
      price: 77,
      expiryDate: new Date('2024-12-10T18:20:10.000Z')
    },
    {
      id: 'product7',
      name: 'Product7',
      manufacturer: { id: 'manufacturer7', name: 'Manufacturer7' },
      price: 18,
      expiryDate: new Date('2027-09-28T15:45:30.000Z')
    },
    {
      id: 'product8',
      name: 'Product8',
      manufacturer: { id: 'manufacturer8', name: 'Manufacturer8' },
      price: 27,
      expiryDate: new Date('2028-04-11T08:00:00.000Z')
    },
    {
      id: 'product9',
      name: 'Product9',
      manufacturer: { id: 'manufacturer9', name: 'Manufacturer9' },
      price: 3,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product10',
      name: 'Product10',
      manufacturer: { id: 'manufacturer5', name: 'Manufacturer5' },
      price: 333,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product11',
      name: 'Product11',
      manufacturer: { id: 'manufacturer2', name: 'Manufacturer2' },
      price: 4,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product12',
      name: 'Product12',
      manufacturer: { id: 'manufacturer3', name: 'Manufacturer3' },
      price: 21,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product13',
      name: 'Product13',
      manufacturer: { id: 'manufacturer11', name: 'Manufacturer11' },
      price: 42,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product14',
      name: 'Product14',
      manufacturer: { id: 'manufacturer9', name: 'Manufacturer9' },
      price: 1,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product15',
      name: 'Product15',
      manufacturer: { id: 'manufacturer7', name: 'Manufacturer7' },
      price: 16,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product16',
      name: 'Product16',
      manufacturer: { id: 'manufacturer17', name: 'Manufacturer17' },
      price: 14,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product17',
      name: 'Product17',
      manufacturer: { id: 'manufacturer12', name: 'Manufacturer12' },
      price: 5,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product18',
      name: 'Product18',
      manufacturer: { id: 'manufacturer4', name: 'Manufacturer4' },
      price: 67,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product19',
      name: 'Product19',
      manufacturer: { id: 'manufacturer9', name: 'Manufacturer9' },
      price: 27,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
    },
    {
      id: 'product20',
      name: 'Product20',
      manufacturer: { id: 'manufacturer91', name: 'Manufacturer91' },
      price: 19,
      expiryDate: new Date('2024-06-10T18:20:10.000Z')
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

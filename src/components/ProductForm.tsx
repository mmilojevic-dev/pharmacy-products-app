import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IProduct } from '@/models'
import { generateId } from '@/utils/generateId'

import { Button } from './Button'
import { Input } from './Input'

interface ProductFormProps {
  onSubmit: SubmitHandler<IProduct>
  editMode: boolean
  initialProduct?: IProduct
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  editMode,
  initialProduct = {
    id: generateId(),
    name: '',
    manufacturer: {
      id: generateId(),
      name: ''
    },
    price: 0,
    expiryDate: new Date()
  }
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IProduct>({
    defaultValues: initialProduct
  })

  const handleFormSubmit = (data: IProduct) => {
    console.log(data)
    onSubmit({
      ...initialProduct,
      ...data
    })
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        type="text"
        placeholder="Product Name"
        {...register('name', { required: 'Product Name is required' })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <Input
        type="text"
        placeholder="Manufacturer Name"
        {...register('manufacturer.name', {
          required: 'Manufacturer Name is required'
        })}
      />
      {errors.manufacturer?.name && (
        <span>{errors.manufacturer.name.message}</span>
      )}

      <Input
        type="number"
        placeholder="Price"
        {...register('price', {
          required: 'Price is required',
          min: { value: 0, message: 'Price must be a positive number' }
        })}
      />
      {errors.price && <span>{errors.price.message}</span>}

      <Input
        type="date"
        placeholder="Expiry Date"
        {...register('expiryDate', {
          required: 'Expiry Date is required'
        })}
      />
      {errors.expiryDate && <span>{errors.expiryDate.message}</span>}

      <Button type="submit" variant={editMode ? 'outline' : 'default'}>
        {editMode ? 'Update Product' : 'Create Product'}
      </Button>
    </form>
  )
}

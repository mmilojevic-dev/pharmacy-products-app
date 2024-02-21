import * as React from 'react'
import { FieldError, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config'
import { IProduct } from '@/models'

import { Button } from './Button'
import { Input } from './Input'

interface ProductFormProps {
  onSubmit: SubmitHandler<IProduct>
  product: IProduct
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  product
}) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IProduct>({
    defaultValues: product
  })

  React.useEffect(() => {
    console.log(navigate)
  }, [navigate])

  const handleFormSubmit = (data: IProduct) => {
    onSubmit({
      ...product,
      ...data
    })
    navigate(ROUTES.PRODUCTS.PATH)
  }

  const getErrorMessage = (field: FieldError) => (
    <span className="text-destructive">{field.message}</span>
  )

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      autoComplete="off"
      className="flex flex-col gap-y-4"
    >
      <div>
        <Input
          className="mb-1"
          type="text"
          placeholder="Product Name"
          {...register('name', { required: 'Product Name is required' })}
        />
        {errors.name && getErrorMessage(errors.name)}
      </div>

      <div>
        <Input
          type="text"
          placeholder="Manufacturer Name"
          {...register('manufacturer.name', {
            required: 'Manufacturer Name is required'
          })}
        />
        {errors.manufacturer?.name &&
          getErrorMessage(errors.manufacturer?.name)}
      </div>

      <div>
        <Input
          type="number"
          placeholder="Price"
          {...register('price', {
            required: 'Price is required',
            min: { value: 0, message: 'Price must be a positive number' }
          })}
        />
        {errors.price && getErrorMessage(errors.price)}
      </div>

      <div>
        <Input
          type="date"
          placeholder="Expiry Date"
          {...register('expiryDate', {
            required: 'Expiry Date is required'
          })}
        />
        {errors.expiryDate && getErrorMessage(errors.expiryDate)}
      </div>

      <div className="flex justify-end gap-x-2">
        <Button type="submit" variant={product.name ? 'outline' : 'default'}>
          {product.name ? 'Update' : 'Create'}
        </Button>
        <Button variant="destructive">Cancel</Button>
      </div>
    </form>
  )
}

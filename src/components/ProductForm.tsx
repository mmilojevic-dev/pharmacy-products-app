import * as React from 'react'
import { FieldError, SubmitHandler, useForm } from 'react-hook-form'

import { IProduct } from '@/models'
import { generateId } from '@/utils/generateId'

import { Button } from './Button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader
} from './Dialog'
import { Input } from './Input'

interface ProductFormProps {
  onSubmit: SubmitHandler<IProduct>
  updateMode: boolean
  product?: IProduct
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  updateMode,
  product = {
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
  const actionLabel = updateMode ? 'Update' : 'Create'
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IProduct>({
    defaultValues: product
  })

  const handleFormSubmit = (data: IProduct) => {
    onSubmit({
      ...product,
      ...data
    })
  }

  const getErrorMessage = (field: FieldError) => (
    <span className="text-destructive">{field.message}</span>
  )

  return (
    <DialogContent>
      <DialogHeader className="items-center">
        <span>{actionLabel} Product</span>
      </DialogHeader>
      <DialogDescription>
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
            <Button type="submit" variant={updateMode ? 'outline' : 'default'}>
              {actionLabel}
            </Button>
            <DialogClose asChild>
              <Button variant="destructive">Cancel</Button>
            </DialogClose>
          </div>
        </form>
      </DialogDescription>
    </DialogContent>
  )
}

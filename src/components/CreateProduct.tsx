import { IProduct } from '@/models'

import { Button } from './Button'
import { Dialog, DialogTrigger } from './Dialog'
import { ProductForm } from './ProductForm'

interface ICreateProduct {
  onCreate: (product: IProduct) => void
  createModalOpen: boolean
  onCreateModalOpenChange: (open: boolean) => void
}

export const CreateProduct: React.FC<ICreateProduct> = ({
  onCreate,
  createModalOpen,
  onCreateModalOpenChange
}) => {
  return (
    <div className="mt-10 flex justify-center">
      <Dialog open={createModalOpen} onOpenChange={onCreateModalOpenChange}>
        <DialogTrigger asChild>
          <Button size="sm">Create New</Button>
        </DialogTrigger>
        <ProductForm onSubmit={onCreate} updateMode={false} />
      </Dialog>
    </div>
  )
}

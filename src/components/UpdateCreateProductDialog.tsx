// Import the necessary components here

import { DialogContent, DialogDescription, DialogHeader } from './Dialog'

interface UpdateCreateProductDialogProps extends React.PropsWithChildren {}

export const UpdateCreateProductDialog: React.FC<
  UpdateCreateProductDialogProps
> = ({ children }) => {
  return (
    <DialogContent>
      <DialogHeader>
        {/* {updateMode ? 'Update Product' : 'Create Product'} */}
        Create Product
      </DialogHeader>
      <DialogDescription>{children}</DialogDescription>
    </DialogContent>
  )
}

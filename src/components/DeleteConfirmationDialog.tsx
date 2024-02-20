// Import the necessary components here

import { DialogClose } from '@radix-ui/react-dialog'

import { Button } from './Button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader
} from './Dialog'

interface DeleteConfirmationDialogProps {
  onConfirm: () => void
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  onConfirm
}) => {
  return (
    <DialogContent>
      <DialogHeader>Delete Confirmation</DialogHeader>
      <DialogDescription>
        Are you sure you want to delete this item?
      </DialogDescription>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="destructive" onClick={onConfirm}>
            Confirm
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Cancel</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export { DeleteConfirmationDialog }

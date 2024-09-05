'use client'
import { useEffect, useRef, useState } from 'react'
import { IconButton } from './IconButton'
import { X } from '@/assets/phosphor-icons'

export interface ModalProps {
  children: React.ReactNode
  show: boolean
  onClose: VoidFunction
}

export function Modal({ children, show, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current) return

    if (show) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [show])

  return (
    <dialog
      className="fixed inset-0 flex h-full max-h-full w-full max-w-full flex-col overflow-visible bg-transparent p-0 text-inherit backdrop:bg-gray-300/30 backdrop:backdrop-blur-md sm:max-h-none sm:overflow-y-scroll sm:p-5 dark:backdrop:bg-gray-700/20"
      ref={dialogRef}
      onClose={onClose}
      onClick={onClose}
    >
      <div
        className="h-full w-full overflow-y-scroll bg-body-light shadow-xl sm:m-auto sm:h-fit sm:w-fit sm:overflow-y-visible sm:rounded-lg dark:bg-body-dark"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 flex justify-end px-5 py-4 sm:px-8 sm:pt-8">
          <IconButton
            label="Close modal"
            icon={X}
            onClick={onClose}
            autoFocus={true}
          />
        </header>

        <div className="px-5 pb-16 sm:px-12">{children}</div>
      </div>
    </dialog>
  )
}

export function ModalExample() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        className="rounded-lg border p-4"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        This is the modal
      </Modal>
    </>
  )
}

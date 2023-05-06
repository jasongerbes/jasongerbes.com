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
      className="m-auto w-full max-w-full bg-transparent p-0 text-inherit backdrop:bg-gray-300/30 backdrop:backdrop-blur-md dark:backdrop:bg-gray-700/30 sm:w-fit sm:p-5"
      ref={dialogRef}
      onClose={onClose}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-lg bg-body-light p-10 px-5 py-6 dark:bg-body-dark sm:w-fit sm:p-12"
        onClick={(event) => event.stopPropagation()}
      >
        <IconButton
          className="absolute right-3 top-3.5 sm:right-4 sm:top-4"
          label="Close modal"
          icon={X}
          onClick={onClose}
          autoFocus={true}
        />

        {children}
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

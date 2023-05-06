'use client'

import { getCoolThing } from '@/app/cool-stuff/utils'
import { Modal } from '@/components/Modal'
import { CoolThingDetails } from '@/components/cool-things/CoolThingDetails'
import { useRouter } from 'next/navigation'

export default function CoolThingModal({ params }: { params: { id: string } }) {
  const thing = getCoolThing(params.id)
  const router = useRouter()

  return (
    <Modal show={true} onClose={() => router.back()}>
      <CoolThingDetails className="max-w-3xl" thing={thing} headingLevel="h2" />
    </Modal>
  )
}

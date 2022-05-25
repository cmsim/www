import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import useSWR from 'swr'

import { SortableItem } from '@/components/Sortable/SortableItem'
import { Item } from '@/components/Sortable/Item'
import { useEffect, useState, memo } from 'react'
import { ILink } from '@/typings'

const LinkList = () => {
  const [items, setItems] = useState<ILink[]>([])
  const { data } = useSWR<{ data: { list: ILink[] } }>(['link/list', { pageSize: 20 }], { revalidateOnFocus: false })
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  useEffect(() => {
    setItems(data?.data?.list || [])
  }, [data])

  function handleDragStart(event: DragStartEvent) {
    const { active } = event

    setActiveId(active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.id === +active.id)
        const newIndex = items.findIndex(item => item.id === +over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }
  return (
    <div className='flex flex-wrap w-[1200px]'>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map(item => item.id.toString())} strategy={horizontalListSortingStrategy}>
          {items?.map(item => (
            <SortableItem key={item.id} data={item} />
          ))}
        </SortableContext>
        <DragOverlay>{activeId ? <Item data={items.filter(item => item.id === +activeId)?.[0] || {}} /> : null}</DragOverlay>
      </DndContext>
    </div>
  )
}

export default memo(LinkList)

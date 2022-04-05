import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Item } from './Item'
import { ILink } from '@/typings'

export function SortableItem(props: { data: ILink }) {
  const id = props.data.id.toString()
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return <Item ref={setNodeRef} {...attributes} {...listeners} id={id} data={props.data} style={style} />
}

import React from 'react'
import { Select } from '@chakra-ui/react'
import dayjs from 'dayjs'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function DateSelect({ onChange }: Props) {
    return (
        <Select placeholder='Selectionez une date' onChange={onChange} border="1px">
            {[...Array(7).keys()].map((i) => {
                const date = dayjs().add(i, 'day')
                return (
                    <option key={i} value={date.toISOString()}>
                        {date.format('dddd DD MMMM')}
                    </option>
                )
            })}
        </Select>
    )
}

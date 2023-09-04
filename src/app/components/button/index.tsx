import { ReactNode } from 'react'

interface IButton {
    children: ReactNode
}

export default function Button({ children }: IButton) {
    return (
        <button
            className={`
                p-1
                rounded-md
                bg-transparent
                border-2
                border-neutral-950
                text-lg
                text-neutral-950
            `}
        >
            {children}
        </button>
    )
}

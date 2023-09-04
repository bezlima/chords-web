import { InputHTMLAttributes } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function Input({ label, ...rest }: IInput) {
    return (
        <span className="flex items-end gap-3">
            <input
                id={label}
                {...rest}
                type="text"
                className={`
                        p-1
                        bg-transparent
                        border-b-2
                        cursor-pointer
                        border-neutral-950
                    `}
            ></input>
            <label
                htmlFor={label}
                className={`
                    text-sm 
                    flex 
                    items-end
                    cursor-pointer
                `}
            >
                {label}
            </label>
        </span>
    )
}

interface IInput {
    label?: string
}

export default function Input({ label }: IInput) {
    return (
        <span className="flex items-end gap-3 bg-green-300">
            <input
                id={label}
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

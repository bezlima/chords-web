import { InputHTMLAttributes, useEffect, useState } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    value: string
    onChange: any
}

export default function ColorPick({ label, value, onChange, ...rest }: IInput) {
    const [hydrated, setHydrated] = useState<boolean>(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    return (
        <>
            {hydrated && (
                <span className="flex items-end border-2 border-teal-800 px-2 rounded-md">
                    <input
                        id={'color'}
                        value={value}
                        onChange={onChange}
                        {...rest}
                        type="color"
                        className={`
                            p-1
                            bg-transparent
                            cursor-pointer
                            w-10
                            h-10
                        `}
                    ></input>
                    <label
                        htmlFor={'color'}
                        className={`
                        flex 
                        items-end
                        cursor-pointer
                        text-[${value}]
                        font-bold
                        text-lg
                    `}
                    >
                        {value}
                    </label>
                </span>
            )}
        </>
    )
}

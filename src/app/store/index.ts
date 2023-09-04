import { create } from 'zustand'

interface IMenuOptions {
    color: string
    setColor: (value: string) => void
}

const menuOptions = create<IMenuOptions>((set) => ({
    color: '#115e59',
    setColor: (value: string) => set(() => ({ color: value })),
}))

export default menuOptions

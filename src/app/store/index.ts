import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IMenuOptions {
    color: string
    setColor: (value: string) => void
}

const menuOptions = create<IMenuOptions>(
    persist(
        (set) => ({
            color: '#115e59',
            setColor: (value: string) => set(() => ({ color: value })),
        }),
        {
            name: 'menuOpts',
            storage: createJSONStorage(() => localStorage),
            partialize: (state: any) => ({ color: state.color }),
        }
    ) as StateCreator<IMenuOptions>
)

export default menuOptions

import ColorPick from '@/app/components/colorPick'
import ScrollController from '@/app/components/scrollController'
import menuOptions from '@/app/store'

export default function AsideMenu() {
    const { color, setColor } = menuOptions()

    return (
        <aside className="w-1/4 flex flex-col items-center justify-center sticky top-16 gap-2">
            <ScrollController />
            <ColorPick value={color} onChange={(e: any) => setColor(e.target.value)} />
        </aside>
    )
}

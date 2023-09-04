import ColorPick from '@/app/components/colorPick'
import ScrollController from '@/app/components/scrollController'

export default function AsideMenu() {
    return (
        <aside className="w-1/4 flex flex-col items-center justify-center sticky top-16 gap-2">
            <ScrollController />
            <ColorPick value={'#115e59'} onChange={() => {}} />
        </aside>
    )
}

import Button from './components/button'
import HTMLRender from './components/htmlRender'
import Input from './components/input'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-2 p-24">
            <Input label="Artista" />
            <Input label="Musica" />
            <Button> Pesquisar </Button>
            <HTMLRender music={'<p> Alo </p>'} />
        </main>
    )
}

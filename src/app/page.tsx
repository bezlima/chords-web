'use client'

import { useState } from 'react'
import Button from './components/button'
import HTMLRender from './components/htmlRender'
import Input from './components/input'
import axios from 'axios'
import BaseURL from './baseURL'
import AsideMenu from './elements/aside'

interface IForm {
    artist: string
    music: string
}

export default function Home() {
    const [music, setMusic] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [form, setForm] = useState<IForm>({
        artist: 'skank',
        music: 'sutilmente',
    })

    function onSubmit(e: any) {
        e.preventDefault()
        setLoading(true)
        axios
            .get(`${BaseURL()}chord/${form.artist}/${form.music}/`)
            .then((res) => {
                setMusic(res.data.cipher)
            })
            .catch((error) => {
                console.error('Erro:', error)
            })
            .finally(() => setLoading(false))
    }

    return (
        <main className="flex min-h-screen flex-col items-center gap-2">
            <form
                onSubmit={onSubmit}
                className={`
                    flex
                    items-center
                    gap-4
                    mt-4
                `}
            >
                <Input
                    label="Artista"
                    value={form.artist}
                    onChange={(e) => setForm({ ...form, artist: e.target.value })}
                />
                <Input
                    label="Musica"
                    value={form.music}
                    onChange={(e) => setForm({ ...form, music: e.target.value })}
                />
                <Button type="submit"> Pesquisar </Button>
            </form>
            <section className="flex items-start w-full h-auto my-8">
                <AsideMenu />
                <span>
                    {loading && <p> Carregando musica ... </p>}
                    <HTMLRender music={music} color="#C9C089" />
                </span>
            </section>
        </main>
    )
}

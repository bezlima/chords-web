'use client'

import { useState } from 'react'
import Button from './components/button'
import HTMLRender from './components/htmlRender'
import Input from './components/input'
import axios from 'axios'
import BaseURL from './baseURL'

interface IForm {
    artist: string
    music: string
}

export default function Home() {
    const [music, setMusic] = useState<string>('')
    const [form, setForm] = useState<IForm>({
        artist: '',
        music: '',
    })

    function onSubmit(e: any) {
        e.preventDefault()
        axios
            .get(`${BaseURL()}chord/${form.artist}/${form.music}/`)
            .then((res) => {
                setMusic(res.data.cipher)
            })
            .catch((error) => {
                console.error('Erro:', error)
            })
    }

    return (
        <main className="flex min-h-screen flex-col items-center gap-2 mt-4">
            <form
                onSubmit={onSubmit}
                className={`
                    flex
                    items-center
                    gap-4
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
            <HTMLRender music={music} />
        </main>
    )
}

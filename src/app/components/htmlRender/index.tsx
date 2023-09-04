interface IHTMLRender {
    music: string
    color: string
}

export default function HTMLRender({ music, color }: IHTMLRender) {
    const formatHTML = music.replace(/<b>/g, `<b style="color: ${color};">`)

    return <span dangerouslySetInnerHTML={{ __html: formatHTML }}></span>
}

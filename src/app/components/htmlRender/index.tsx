interface IHTMLRender {
    music: string
    color: string
}

export default function HTMLRender({ music, color }: IHTMLRender) {
    const formatHTML = music.replace(/<b>/g, `<b style="color: ${color};">`)

    return (
        <span
            className={`
                my-8
            `}
            dangerouslySetInnerHTML={{ __html: formatHTML }}
        ></span>
    )
}

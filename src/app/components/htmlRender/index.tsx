interface IHTMLRender {
    music: string
}

export default function HTMLRender({ music }: IHTMLRender) {
    return <span dangerouslySetInnerHTML={{ __html: music }}></span>
}

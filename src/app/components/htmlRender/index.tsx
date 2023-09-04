interface IHTMLRender {
    music: string
}

export default function HTMLRender({ music }: IHTMLRender) {
    return <span className="mt-8" dangerouslySetInnerHTML={{ __html: music }}></span>
}

import { useEffect, useState } from 'react'

export default function ScrollController() {
    const [scrollSpeed, setScrollSpeed] = useState(20.0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [scrollInterval, setScrollInterval] = useState<any>(null)
    const [playDelay, setPlayDelay] = useState<number>(0)

    const startScrolling = () => {
        if (scrollSpeed > 0) {
            const interval = setInterval(() => {
                window.scrollBy(0, scrollSpeed)
            }, 1000)
            setScrollInterval(interval)
        }
    }

    const stopScrolling = () => {
        if (scrollInterval !== null) {
            clearInterval(scrollInterval)
            setScrollInterval(null)
        }
    }

    const handleSpeedChange = (newSpeed: number) => {
        setScrollSpeed(newSpeed)
        if (isPlaying) {
            stopScrolling()
            startScrolling()
        }
    }

    const togglePlayDelay = () => {
        if (isPlaying) {
            setIsPlaying(false)
            stopScrolling()
        } else {
            setTimeout(() => {
                setIsPlaying(true)
                startScrolling()
            }, playDelay)
        }
    }

    useEffect(() => {
        if (isPlaying) {
            startScrolling()
        } else {
            stopScrolling()
        }

        return () => {
            stopScrolling()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying])

    return (
        <div className="bg-teal-800 flex flex-col items-center rounded-md p-4">
            <p className="bg-teal-800 text-white font-bold mb-1"> Velocidade da tela </p>
            <div className={`bg-teal-800 w-36 h-12 p-2 rounded-md flex items-center justify-between`}>
                <button
                    className="bg-white w-8 rounded-full text-xl hover:text-2xl"
                    onClick={() => handleSpeedChange(scrollSpeed - 1.0)}
                >
                    -
                </button>
                <p className="bg-teal-800 text-white font-bold mb-1">{scrollSpeed}</p>
                <button
                    className="bg-white w-8 rounded-full text-xl hover:text-2xl"
                    onClick={() => handleSpeedChange(scrollSpeed + 1.0)}
                >
                    +
                </button>
            </div>

            <p className="bg-teal-800 text-white font-bold mb-1 "> Tempo de inicio</p>
            <div className={`bg-teal-800 w-36 h-12 p-2 rounded-md flex items-center justify-between`}>
                <button
                    className="bg-white w-8 rounded-full text-xl hover:text-2xl"
                    onClick={() => setPlayDelay(playDelay - 1000)}
                >
                    -
                </button>
                <p className="bg-teal-800 text-white font-bold mb-1">{playDelay / 1000} Seg </p>
                <button
                    className="bg-white w-8 rounded-full text-xl hover:text-2xl"
                    onClick={() => setPlayDelay(playDelay + 1000)}
                >
                    +
                </button>
            </div>
            <button
                className="border-b-2 border-white text-md hover:text-lg text-white font-bold"
                onClick={togglePlayDelay}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}

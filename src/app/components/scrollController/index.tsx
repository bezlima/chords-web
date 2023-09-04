import { useCallback, useEffect, useState } from 'react'

export default function ScrollController() {
    const [scrollSpeed, setScrollSpeed] = useState(10.0) // Velocidade de scroll inicial (0.1 pixels por intervalo)
    const [isPlaying, setIsPlaying] = useState(false)
    const [scrollInterval, setScrollInterval] = useState<any>(null)

    const startScrolling = useCallback(() => {
        if (scrollSpeed > 0) {
            const interval = setInterval(() => {
                window.scrollBy(0, scrollSpeed)
            }, 1000) // 1000ms (1 segundo) entre os intervalos
            setScrollInterval(interval)
        }
    }, [])

    const stopScrolling = useCallback(() => {
        if (scrollInterval !== null) {
            clearInterval(scrollInterval)
            setScrollInterval(null)
        }
    }, [])

    const handleSpeedChange = (newSpeed: number) => {
        setScrollSpeed(newSpeed)
        if (isPlaying) {
            stopScrolling()
            startScrolling()
        }
    }

    const togglePlayPause = () => {
        if (isPlaying) {
            setIsPlaying(false)
            stopScrolling()
        } else {
            setIsPlaying(true)
            startScrolling()
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
    }, [isPlaying, startScrolling, stopScrolling])

    return (
        <div className="bg-teal-800 w-36 h-12 p-2 rounded-md flex items-center justify-between">
            <button
                className="bg-white w-8 rounded-full text-xl hover:text-2xl"
                onClick={() => handleSpeedChange(scrollSpeed - 0.1)}
            >
                -
            </button>
            <button
                className="border-b-2 border-white text-md hover:text-lg text-white font-bold"
                onClick={togglePlayPause}
                style={{ scrollBehavior: 'smooth' }}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
                className="bg-white w-8 rounded-full text-xl hover:text-2xl"
                onClick={() => handleSpeedChange(scrollSpeed + 0.1)}
            >
                +
            </button>
        </div>
    )
}

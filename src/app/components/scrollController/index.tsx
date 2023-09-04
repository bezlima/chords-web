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
        <div>
            <h1>Mini Scroll Control</h1>
            <div>
                <button onClick={() => handleSpeedChange(scrollSpeed - 0.1)}>-</button>
                <button onClick={togglePlayPause} style={{ scrollBehavior: 'smooth' }}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={() => handleSpeedChange(scrollSpeed + 0.1)}>+</button>
            </div>
            <p>Velocidade atual: {scrollSpeed.toFixed(1)} pixels por segundo</p>
        </div>
    )
}

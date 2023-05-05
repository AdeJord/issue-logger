import { useState } from 'react'

export default function UseModal() {
    const [show, setShow] = useState(false)

    function toggle() {
        setShow(!show)
    }

    return {
        show,
        toggle
    }
}
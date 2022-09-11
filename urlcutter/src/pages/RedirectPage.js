import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOriginalURL } from '../apis/urlShortcut'

export default function RedirectPage() {

    const { shortcut } = useParams()
    
    useEffect(() => {
        redirector(shortcut).then(res => {
            if (res.status === 200) {
                window.location.href = res.redirect
                return null
            }
            window.location.href = window.location.origin + "/error"
        })
    }, [shortcut])

    const redirector = (shortcut) => {
        const promise = getOriginalURL(shortcut)
        return promise
    }

    return (
        <div>
        </div>
    )
}

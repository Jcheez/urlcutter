import React, { useEffect } from 'react'
import { CircularProgress } from '@mui/material'
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

    const Iconstyling = {
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        height: "90vh"
    }

    return (
        <div style={Iconstyling}>
            <div style={{textAlign: 'center'}}>
                <CircularProgress size={100}/>
                <br />
                <p>LOADING</p>
            </div>
        </div>
    )
}

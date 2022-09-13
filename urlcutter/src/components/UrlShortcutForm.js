import { Button, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { postURLshortcut } from '../apis/urlShortcut'

export default function UrlShortcutForm() {
  const [original, setOriginal] = useState("")
  const [shortcut, setShortCut] = useState("")

  const handleOriginalChange = event => {
    document.getElementById("success").hidden = true
    setOriginal(event.target.value)
  }

  const handleShortCutChange = event => {
    document.getElementById("success").hidden = true
    setShortCut(event.target.value)
  }

  const isValidURL = (url) => {
    try {
      return Boolean(new URL(url))
    } catch(error) {
      return false
    }
  }

  const addToLocalStorage = (original, shortcut) => {
    let values = localStorage.getItem("urlCutter")
    console.log(values)
    if (values === null) {
      localStorage.setItem("urlCutter", JSON.stringify([[original, shortcut]]))
    } else {
      let storage = JSON.parse(values)
      storage.push([original, shortcut])
      localStorage.setItem("urlCutter", JSON.stringify(storage))

    }
  }

  const onSubmit = async () => {
    document.getElementById("success").hidden = true
    if (!isValidURL(original)) {
      document.getElementById("error").innerHTML = "URL is not valid"
      return
    } else if (shortcut.replaceAll(" ", "").length === 0) {
      document.getElementById("error").innerHTML = "Shortcut is not valid"
      return
    }

    document.getElementById("error").innerHTML = ""
    const promise = await postURLshortcut({original: original, shortcut: shortcut.replaceAll(" ", "")})
    if (promise.status === 200) {
      addToLocalStorage(original, shortcut.replaceAll(" ", ""))
      let newShortcut = shortcut
      setShortCut(newShortcut.replaceAll(" ", ""))
      document.getElementById("success").hidden = false
    } else if (promise.status === 400) {
      document.getElementById("error").innerHTML = "Shortcut has already been used"
    } else {
      document.getElementById("error").innerHTML = "Unknown error occurred"
    }
  }

  return (
    <Box>
      <TextField placeholder="Link to Shorten" onChange={handleOriginalChange} sx={{width: "500px"}}/>
      <br />
      <br />
      <TextField placeholder="Shortcut" onChange={handleShortCutChange} sx={{width: "500px"}}/>
      <br />
      <p id='error' style={{color: 'red'}}></p>
      <Button variant='contained' onClick={onSubmit} sx={{width: "400px"}} size='large'>Make a Shortcut!</Button>
      <p id='success' hidden>
        Shortcut created! U can use <Link href={window.location.href + shortcut}> {window.location.href}{shortcut}</Link> instead of the original link
      </p>
    </Box>
  )
}

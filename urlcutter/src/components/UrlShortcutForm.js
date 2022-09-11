import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { postURLshortcut } from '../apis/urlShortcut'

export default function UrlShortcutForm() {
  const [original, setOriginal] = useState("")
  const [shortcut, setShortCut] = useState("")

  const handleOriginalChange = event => {
    setOriginal(event.target.value)
  }

  const handleShortCutChange = event => {
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
    } else if (shortcut.length === 0) {
      document.getElementById("error").innerHTML = "Shortcut is not valid"
      return
    }

    document.getElementById("error").innerHTML = ""
    const promise = await postURLshortcut({original: original, shortcut: shortcut})
    if (promise.status === 200) {
      addToLocalStorage(original, shortcut)
      document.getElementById("success").hidden = false
    } else if (promise.status === 400) {
      document.getElementById("error").innerHTML = "Shortcut has already been used"
    } else {
      document.getElementById("error").innerHTML = "Unknown error occurred"
    }
  }

  return (
    <Box>
      <Typography>Enter a link you wish to shorten</Typography>
      <TextField onChange={handleOriginalChange} sx={{width: "300px"}}/>
      <Typography>Shorten your link: {window.location.origin}/{shortcut}</Typography>
      <TextField placeholder="shortcut" onChange={handleShortCutChange} sx={{width: "300px"}}/>
      <br />
      <p id='error'></p>
      <Button variant='contained' onClick={onSubmit} sx={{width: "300px"}}>Make a Shortcut!</Button>
      <p id='success' hidden>Shortcut created! U can use {window.location.href}{shortcut} instead of the original link</p>
    </Box>
  )
}

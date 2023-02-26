import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import "./Contact.css"
import "../../index.css"


export default function Contact() {
    return (
        <div id="contact1">
            <div id="contact2">
                <h2>SI NECESITAS SABER MÁS</h2>
                <p>Contacta con nosotras</p>
                <iframe id="button" src="https://embed.lottiefiles.com/animation/95852"></iframe>
                <Stack direction="row" spacing={2}>
                    <Button id="send"variant="outlined" style={{backgroundColor:"#066285", color:'white', fontFamily:'Jura'}}>CONTACTAR <SendIcon /></Button>
                </Stack>
            </div>
        </div>
    )
}
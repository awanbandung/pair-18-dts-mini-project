import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Typography } from '@mui/material'

export const Footer = () => {
    return (
        <Navbar expand="lg" className='footer-bg'>
            <Container className='justify-content-center'>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    Copyright Pair 18 @ 2022
                </Typography>
            </Container>
        </Navbar>
    )
}

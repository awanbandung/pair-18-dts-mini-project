import React from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const AuthForm = (props) => {
    return (
        <Container
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20rem',
                height: '25rem',
                boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.5)',
                borderRadius: '10px',
                zIndex: 999,
                margin: '0 auto',
                padding: '15px 4px'

            }}
        >
            <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: '800' }}>{props.note === 'login' ? 'Login' : 'Register'}</h2>
            <Box
                component='form'
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: '30px',
                    flexDirection: 'column'
                }}
            >
                <Stack direction='vertical' gap={4}>
                    <TextField label="Email" variant="outlined" sx={{ input: { color: '#fff' } }} fullWidth focused />
                    <TextField label="Password" variant="outlined" sx={{ input: { color: '#fff' } }} fullWidth focused />
                    <Button variant="contained" color='primary'>{props.note === 'login' ? 'Sign In' : 'Sign Up'}</Button>
                </Stack>

                {props.note === 'login' ? <Typography variant='body2' sx={{ color: '#fff', marginTop: '40px' }}>Dont have any account? <Link to='/register' style={{ color: '#fff' }}>Sign Up Now</Link></Typography> : <Typography variant='body2' sx={{ color: '#fff', marginTop: '40px' }}>Already have an account? <Link to='/login' style={{ color: '#fff' }}>Sign In Now</Link></Typography>}
            </Box>
        </Container >
    )
}

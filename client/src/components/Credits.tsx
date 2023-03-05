import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import InfoModal from '../components/InfoModal';

const Credits = () => {
    const [showCredits, setShowCredits] = React.useState(false);
    const handleOpenCredits = () => setShowCredits(true);
    const handleCloseCredits = () => setShowCredits(false);

    return (
        <>
            <InfoModal open={showCredits} handleClose={handleCloseCredits}>
                <h1 style={{ textAlign: 'right' }}>CREDITS</h1>
                <hr />
                <Grid container spacing={2}>
                <Grid xs={4}>
                    <h2>Team Members</h2>
                    <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>ROLE</TableCell>
                            <TableCell>GITHUB</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Luke Prior</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/LukePrior' target='_blank' style={{color: 'inherit' }}>LukePrior</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Wanning Cai</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/incalescence' target='_blank' style={{color: 'inherit' }}>incalescence</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Carey Yang</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Justcarey13' target='_blank' style={{color: 'inherit' }}>Justcarey13</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Larissa Yip</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/eazoph' target='_blank' style={{color: 'inherit' }}>eazoph</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Jasmin Wu</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/jasminwu' target='_blank' style={{color: 'inherit' }}>jasminwu</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Terence Lau</TableCell>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit' }}>Laute</a></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={4}>
                    <h2>Tech Stack</h2>
                    <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>PART</TableCell>
                            <TableCell>TECHNOLOGIES</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Hosting</TableCell>
                            <TableCell>Vercel</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Front-end</TableCell>
                            <TableCell>Vite, React</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Libraries/Frameworks</TableCell>
                            <TableCell>MUI</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>External APIs</TableCell>
                            <TableCell>ChatGPT</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Back-end</TableCell>
                            <TableCell>TODO</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>Databases</TableCell>
                            <TableCell>localStorage</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={4}>
                    <h2>Data Sourcess</h2>
                    <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>SOURCE</TableCell>
                            <TableCell>LINK</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>&#8594;</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>&#8594;</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>&#8594;</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>&#8594;</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>&#8594;</a></TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>TODO</TableCell>
                            <TableCell><a href='https://github.com/Laute' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>&#8594;</a></TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                </Grid>
            </InfoModal>
            <footer>
                Made with ♥ by Luke, Wanning, Carey, Larissa, Jasmin, and Terrie at UNIHACK ‘23 in Sydney.<br/><a href='javascript:;' style={{color: 'inherit', textDecoration: 'none' }} onClick={handleOpenCredits}>CREDITS</a> | <a href='https://github.com/UNIHACK2023/UNIHACK-23' target='_blank' style={{color: 'inherit', textDecoration: 'none' }}>GITHUB</a>
            </footer>
        </>
    )
};

export default Credits;
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface InfoModalProps {
    open: boolean;
    handleClose: () => void;
    children?: React.ReactNode;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
    bgcolor: '#D9D9D9',
    border: '1px solid #000',
    boxShadow: 12,
    p: 4,
};

const InfoModal = (props: InfoModalProps) => {
    const { open, handleClose, children } = props;

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
};

export default InfoModal;
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import NumberInput from '../numberInput/numberInput';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Setting=()=>{
    const [open, setOpen]= useState(false);
    const handleOpen=()=>setOpen(true);
    const handleClose=()=>setOpen(false);
   
    const names= ['pomodoro', ' ShortBreak', 'LongBreak'];

    return(
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                     names.map((con:any)=><NumberInput key={con} cont={con}/>)
                    }
                </Box>
            </Modal>
        </div>
    )
}

export default Setting
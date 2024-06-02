import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import P1 from '../pages/assets/p1.jpeg'
import P2 from '../pages/assets/p2.jpeg'
import P3 from '../pages/assets/p3.jpeg'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Notification() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen} className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                    <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
            </button>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
                <DialogContent>
                    <div className='mx-auto max-w-md '>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h2 className='text-center font-bold text-3xl pt-4'>Notification</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xl mx-auto max-w-sm relative mt-2">
                                    <span className="text-xs font-bold uppercase px-2 mt-2 mr-2 text-green-900 bg-green-400 border rounded-full absolute top-0 right-0">New</span>
                                    <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">4:36 PM</span>

                                    <img className="h-12 w-12 rounded-full" alt="John Doe's avatar"
                                        src={P1} />

                                    <div className="ml-5">
                                        <h4 className="text-lg font-semibold leading-tight text-gray-900">Vineet Kanher</h4>
                                        <p className="text-sm text-gray-600">Created a new post</p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xl mx-auto max-w-sm relative mt-2">
                                    <span className="text-xs font-bold uppercase px-2 mt-2 mr-2 text-green-900 bg-green-400 border rounded-full absolute top-0 right-0">New</span>
                                    <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">12:06 PM</span>

                                    <img className="h-12 w-12 rounded-full" alt="John Doe's avatar"
                                        src={P2} />

                                    <div className="ml-5">
                                        <h4 className="text-lg font-semibold leading-tight text-gray-900">Rashmi Singh</h4>
                                        <p className="text-sm text-gray-600">Liked the event post!</p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xl mx-auto max-w-sm relative mt-2">
                                    <span className="text-xs font-bold uppercase px-2 mt-2 mr-2 text-green-900 bg-green-400 border rounded-full absolute top-0 right-0">New</span>
                                    <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">1:01 PM</span>

                                    <img className="h-12 w-12 rounded-full" alt="John Doe's avatar"
                                        src={P3} />

                                    <div className="ml-5">
                                        <h4 className="text-lg font-semibold leading-tight text-gray-900">Suhani Chauhan</h4>
                                        <p className="text-sm text-gray-600">You have a new message!</p>
                                    </div>
                                </div>
                            </Grid>

                            

                        </Grid>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='error'>Cancel</Button>
                    {/* <Button onClick={handleClose}>Agree</Button> */}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

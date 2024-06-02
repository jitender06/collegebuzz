import { Grid } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export default function CreatePost() {
//     const [data, setData] = useState({
//         title: "",
//         description: "",
//         file: null
//     })

//     const [post, setPost] = useState(() => {
//         const storedPost = localStorage.getItem('post');
//         return storedPost ? JSON.parse(storedPost) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem('post', JSON.stringify(post));
//         setData({
//             title: "",
//             description: "",
//             file: null
//         });
//     }, [post]);

//     const handleChange = (key, value) => {
//         setData({
//             ...data,
//             [key]: value
//         })
//     }

//     const handleChangeFile = (e) => {
//         const file = e.target.files[0];
//         setData({
//             ...data,
//             file: file
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!data.title.length || !data.description.length) {
//             toast("Please fill the all fields");
//             return;
//         }
//         setPost(prevAllUser => [...prevAllUser, data]);
//         localStorage.setItem('post', JSON.stringify([...post, ...data]));
//         setData({
//             title: "",
//             description: "",
//             file: null
//         });
//     };
//     console.log(post,"::post")

//     return (
//         <div className='mx-auto max-w-md pt-10'>
//             <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                     <h2 className='text-center font-bold text-3xl py-4'>Create Your Post </h2>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
//                     <input
//                         type="text"
//                         name='title'
//                         value={data.title}
//                         onChange={(e) => handleChange(e.target.name, e.target.value)}
//                         id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
//                 </Grid>

//                 <Grid item xs={12}>
//                     <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
//                     <textarea
//                         name="description"
//                         value={data.description}
//                         onChange={(e) => handleChange(e.target.name, e.target.value)}
//                         id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>
//                 </Grid>

//                 <Grid item xs={12}>
//                     <label className="block">
//                         <span className="sr-only">Choose profile photo</span>
//                         <input
//                             type="file" 
//                             name="file"
//                             accept="image/*" 
//                             // value={data?.file}
//                             onChange={handleChangeFile}
//                             className="block w-full text-sm text-gray-500
//                             file:me-4 file:py-2 file:px-4
//                             file:rounded-lg file:border-0
//                             file:text-sm file:font-semibold
//                             file:bg-gray-600 file:text-white
//                             hover:file:bg-gray-700
//                             file:disabled:opacity-50 file:disabled:pointer-events-none
//                             dark:text-neutral-500
//                             dark:file:bg-gray-500
//                             dark:hover:file:bg-gray-400"
//                         />
//                     </label>

//                 </Grid>
//                 <Grid item xs={12} className='text-center'>
//                     <button onClick={handleSubmit} type="button" className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post Now</button>
//                     <ToastContainer toastStyle={{ backgroundColor: "rgb(101 70 195)", color:"white",}} progressStyle={{color:"blue"}}/>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreatePost({icon}) {
    const [data, setData] = React.useState({
        title: "",
        description: "",
        file: null
    })

    const [post, setPost] = React.useState(() => {
        const storedPost = localStorage.getItem('post');
        return storedPost ? JSON.parse(storedPost) : [];
    });

    React.useEffect(() => {
        localStorage.setItem('post', JSON.stringify(post));
        setData({
            title: "",
            description: "",
            file: null
        });
    }, [post]);

    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setData({
            ...data,
            file: file
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.title.length || !data.description.length) {
            toast("Please fill the all fields");
            return;
        }
        setPost(prevAllUser => [...prevAllUser, data]);
        localStorage.setItem('post', JSON.stringify([...post, ...data]));
        setData({
            title: "",
            description: "",
            file: null
        });
        setOpen(false);
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen} className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                {
                    !icon &&
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                    </svg>
                }
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Create Post</p>
            </button>
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
                                <h2 className='text-center font-bold text-3xl py-4'>Create Your Post </h2>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input
                                    type="text"
                                    name='title'
                                    value={data.title}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </Grid>

                            <Grid item xs={12}>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                <textarea
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                    id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>
                            </Grid>

                            <Grid item xs={12}>
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        // value={data?.file}
                                        onChange={handleChangeFile}
                                        className="block w-full text-sm text-gray-500
                            file:me-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-600 file:text-white
                            hover:file:bg-gray-700
                            file:disabled:opacity-50 file:disabled:pointer-events-none
                            dark:text-neutral-500
                            dark:file:bg-gray-500
                            dark:hover:file:bg-gray-400"
                                    />
                                </label>

                            </Grid>
                            <Grid item xs={12} className='text-center'>
                                <button onClick={handleSubmit} type="button" className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">POST</button>
                                <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                                <ToastContainer toastStyle={{ backgroundColor: "rgb(101 70 195)", color: "white", }} progressStyle={{ color: "blue" }} />
                            </Grid>
                        </Grid>
                    </div>

                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

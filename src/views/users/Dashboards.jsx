// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Tooltip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
// } from "@material-ui/core";
// import {
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Add as AddIcon,
// } from "@material-ui/icons";
// import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   mainoi: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   table: {
//     minWidth: 650,
//   },
//   addButton: {
//     margin: theme.spacing(2),
//   },
// }));

// function Dashboard() {
//   const classes = useStyles();
//   const [openEditDialog, setOpenEditDialog] = useState(false);
//   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
//   const [selectedPost, setSelectedPost] = useState({});
//   const [posts, setPosts] = useState([
//     { id: 1, title: "Blog post 1", content: "Lorem ipsum dolor sit amet." },
//     {
//       id: 2,
//       title: "Blog post 2",
//       content: "Sed ut perspiciatis unde omnis iste natus error.",
//     },
//   ]);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//   });

//   const handleEditClick = (post) => {
//     setSelectedPost(post);
//     setFormData({ title: post.title, content: post.content });
//     setOpenEditDialog(true);
//   };

//   const handleDeleteClick = (post) => {
//     setSelectedPost(post);
//     setOpenDeleteDialog(true);
//   };

//   const handleEditDialogClose = () => {
//     setOpenEditDialog(false);
//     setSelectedPost({});
//     setFormData({ title: "", content: "" });
//   };

//   const handleDeleteDialogClose = () => {
//     setOpenDeleteDialog(false);
//     setSelectedPost({});
//   };

//   const handleFormChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const updatedPost = {
//       ...selectedPost,
//       title: formData.title,
//       content: formData.content,
//     };
//     const updatedPosts = posts.map((post) =>
//       post.id === updatedPost.id ? updatedPost : post
//     );
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/createpost",
//         updatedPosts
//       );
//       console.log(response.data);
//       console.log("response.data");
//       // navigate("/dashboard");
//     } catch (error) {
//       console.log(error.response.data.message);
//     }
//     handleEditDialogClose();
//   };

//   const handleDeleteConfirm = () => {
//     const updatedPosts = posts.filter((post) => post.id !== selectedPost.id);
//     setPosts(updatedPosts);
//     handleDeleteDialogClose();
//   };

//   return (
//     <div className={classes.mainoi}>
//       <Tooltip title="Add new post">
//         <IconButton
//           className={classes.addButton}
//           onClick={() => setOpenEditDialog(true)}
//         >
//           <AddIcon />
//         </IconButton>{" "}
//       </Tooltip>{" "}
//       <TableContainer component={Paper}>
//         <Table className={classes.table} arial-label="Blog posts">
//           <TableHead>
//             <TableRow>
//               <TableCell> ID </TableCell> <TableCell> Title </TableCell>{" "}
//               <TableCell> Content </TableCell> <TableCell> Actions </TableCell>{" "}
//             </TableRow>{" "}
//           </TableHead>{" "}
//           <TableBody>
//             {" "}
//             {posts.map((post) => (
//               <TableRow key={post.id}>
//                 <TableCell> {post.id} </TableCell>{" "}
//                 <TableCell> {post.title} </TableCell>{" "}
//                 <TableCell> {post.content} </TableCell>{" "}
//                 <TableCell>
//                   <Tooltip title="Edit">
//                     <IconButton onClick={() => handleEditClick(post)}>
//                       <EditIcon />
//                     </IconButton>{" "}
//                   </Tooltip>{" "}
//                   <Tooltip title="Delete">
//                     <IconButton onClick={() => handleDeleteClick(post)}>
//                       <DeleteIcon />
//                     </IconButton>{" "}
//                   </Tooltip>{" "}
//                 </TableCell>{" "}
//               </TableRow>
//             ))}{" "}
//           </TableBody>{" "}
//         </Table>{" "}
//       </TableContainer>{" "}
//       <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
//         <form onSubmit={handleFormSubmit}>
//           <DialogTitle>
//             {" "}
//             {selectedPost.id ? "Edit Post" : "Add Post"}{" "}
//           </DialogTitle>{" "}
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               name="title"
//               label="Title"
//               type="text"
//               fullWidth
//               value={formData.title}
//               onChange={handleFormChange}
//             />{" "}
//             <TextField
//               margin="dense"
//               name="content"
//               label="Content"
//               type="text"
//               fullWidth
//               multiline
//               rows={4}
//               value={formData.content}
//               onChange={handleFormChange}
//             />{" "}
//           </DialogContent>{" "}
//           <DialogActions>
//             <Button onClick={handleEditDialogClose} color="primary">
//               Cancel{" "}
//             </Button>{" "}
//             <Button type="submit" color="primary">
//               Save{" "}
//             </Button>{" "}
//           </DialogActions>{" "}
//         </form>{" "}
//       </Dialog>{" "}
//       <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
//         <DialogTitle> Delete Post </DialogTitle>{" "}
//         <DialogContent>
//           Are you sure you want to delete the post "{selectedPost.title}" ?
//         </DialogContent>{" "}
//         <DialogActions>
//           <Button onClick={handleDeleteDialogClose} color="primary">
//             Cancel{" "}
//           </Button>{" "}
//           <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
//             Delete{" "}
//           </Button>{" "}
//         </DialogActions>{" "}
//       </Dialog>{" "}
//     </div>
//   );
// }
// export { Dashboard };

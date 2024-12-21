import { Typography, Box, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, Fab } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { /* ... imports ... */ } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodo, editTodo, toggleTodo, deleteTodo } from "./store/TodoReducer";

const Todo = () => {
    const [text, setText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todo.todoList);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        if (isEditing && editingId) {
            dispatch(editTodo({ id: editingId, text }));
            setEditingId(null);
            setIsEditing(false);
        } else {
            dispatch(addTodo(text));
        }
        setText("");
    };

    const handleEdit = (id, currentText) => {
        setIsEditing(true);
        setEditingId(id);
        setText(currentText);
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 500,
            padding: 3,
            bgcolor: "#fff9c4",
            borderRadius: '8px',
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            mt: 4,
            position: 'relative'
        }}>
            <Typography variant="h4" gutterBottom>
                Todo List with Redux
            </Typography>

            {!todoList ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Box sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
                        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex" }}>
                            <TextField
                                fullWidth
                                label={isEditing ? "Edit task" : "Add New Task"}
                                variant="outlined"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                sx={{ width: "80%" }}
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ width: "20%", height: "100%", color: "white"}}
                            >
                                {isEditing ? "edit" : "Add"}
                            </Button>
                        </form>
                    </Box>
                    <List sx={{ width: "100%" }}>
                        {todoList.map((item) => (
                            <ListItem key={item.id} divider>
                                <Checkbox checked={item.completed} onChange={() => handleToggle(item.id)} />
                                <ListItemText primary={item.text} />
                                <IconButton aria-label="edit" onClick={() => handleEdit(item.id, item.text)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
                        <Button
                            variant="contained"
                            onClick={() => dispatch(clearTodo())}
                            sx={{ width: "100%", color: "white" }}
                        >
                            Clear all
                        </Button>
                    </Box>
                    <Fab color="primary" aria-label="add" onClick={handleSubmit} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                        <AddIcon />
                    </Fab>
                </>
            )}
        </Box>
    );
};

export default Todo;
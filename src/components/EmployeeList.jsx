import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Alert, List, ListItem, ListItemText, Avatar, ListItemAvatar, Typography } from '@mui/material';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10'); // Fetch 10 random users
                setEmployees(response.data.results); // Access the 'results' array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <CircularProgress />
        </div>;
    }

    if (error) {
        return <Alert severity="error">Error: {error}</Alert>;
    }

    if (!employees || employees.length === 0) {
        return <Typography variant="body1" align="center">No employees found.</Typography>;
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>Employee List</Typography>
            <List>
                {employees.map((employee) => (
                    <ListItem key={employee.login.uuid} divider> {/* Use a unique key */}
                        <ListItemAvatar>
                            <Avatar src={employee.picture.thumbnail} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${employee.name.first} ${employee.name.last}`}
                            secondary={`Email: ${employee.email} | Phone: ${employee.phone}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default EmployeeList;

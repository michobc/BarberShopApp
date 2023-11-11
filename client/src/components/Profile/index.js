import React, { useState } from 'react';
import { Card, CardContent, Avatar, Typography, Button, Input, Box } from '@mui/material';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = async () => {
    try {
      // Perform an API request to save the changes to the backend
      // const response = await api.updateUserProfile(editedUser);

      // if (response.status === 200) {
      // Update the user state with the editedUser
      // updateUser(editedUser);
      setIsEditing(false); // Exit editing mode
      // } else {
      // Handle the case where the save was unsuccessful
      // You can show an error message to the user
      // }
    } catch (error) {
      // Handle any errors that occur during the API request
      // You can show an error message to the user
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditedUser((prevUser) => ({
          ...prevUser,
          profilePicture: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Center vertically on the page
      }}
    >
      <Card sx={{ maxWidth: 1000, padding: 10, textAlign: 'center', boxShadow: 20, borderRadius: 12, backgroundColor: 'white' }}>
        <CardContent>
          <Avatar alt={editedUser.name} src={editedUser.profilePicture} sx={{ width: 150, height: 150, marginBottom: 2 }} />
          {isEditing && (
            <Input
              type="file"
              accept="image/*"
              name="profilePicture"
              onChange={handleProfilePictureChange}
              sx={{ marginBottom: 2 }}
            />
          )}
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            {editedUser.name}
          </Typography>
          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 30, color: 'black' }}>
            {editedUser.firstName} {editedUser.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            {editedUser.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Date of Birth: {editedUser.dateOfBirth}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Address: {editedUser.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Phone Number: {editedUser.phoneNumber}
          </Typography>
          {isEditing && (
            <Button onClick={handleEditSave} variant="contained" color="secondary">
              Save Changes
            </Button>
          )}
          {!isEditing && (
            <Button onClick={handleEditToggle} variant="outlined" color="secondary">
              Edit Profile
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;

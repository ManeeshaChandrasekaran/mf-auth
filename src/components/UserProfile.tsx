import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, logout } from 'host/store';

const UserProfile: React.FC = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const username = useSelector((state: RootState) => state.user.username);

    const handleLogout = () => {
        dispatch(logout());
    };

    if (!isLoggedIn) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Please log in to view your profile</h2>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>User Profile</h2>
            <div style={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '20px', 
                marginTop: '20px',
                backgroundColor: '#f9f9f9'
            }}>
                <h3>Profile Information</h3>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Status:</strong> Logged In</p>
                <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
                
                <button 
                    onClick={handleLogout}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
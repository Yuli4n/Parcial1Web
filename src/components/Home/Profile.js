import React from 'react';

const Profile = () => {
    return (
        <div style={{ 
            textAlign: 'center', 
            padding: '20px', 
            border: '1px solid #ccc', 
            backgroundColor: 'blue', 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            alignItems: 'center' 
        }}>
            <div>
                <img src="profile_picture.png" alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
            </div>
            <div>
                <h2>Your Name</h2>
            </div>
            <div>
                <img src="running_logo.png" alt="Running icon" style={{ width: '100px', margin: '10px' }} />
            </div>
            <div> 
                <p>This is the first paragraph.</p>
            </div>
            <div>
                <img src="swimming_logo.png" alt="Swimming icon" style={{ width: '100px', margin: '10px' }} />
            </div>
            <div> 
                <p>This is the second paragraph.</p>
            </div>
            <div>
                <img src="swimming_logo.png" alt="Biking icon" style={{ width: '100px', margin: '10px' }} />
            </div>
            <div> 
                <p>This is the third paragraph.</p>
            </div>
        </div>
    );
};

export default Profile;

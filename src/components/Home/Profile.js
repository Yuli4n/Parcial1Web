import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-image">
                    <img src="profile_picture.png" alt="Profile" />
                </div>
                <div className="profile-name">
                    <h2>{user.name.split(' ')[0]}</h2>
                    <h2>{user.name.split(' ')[1]}</h2>
                </div>
                <div className="profile-activities">
                    <div className="activity">
                        <img src="/running_logo.png" alt="Running" className="activity-icon" />
                        <p className="activity-time">{user.running_time}</p>
                    </div>
                    <div className="activity">
                        <img src="/swimming_logo.png" alt="Swimming" className="activity-icon" />
                        <p className="activity-time">{user.swimming_time}</p>
                    </div>
                    <div className="activity">
                        <img src="/biking_logo.png" alt="Cycling" className="activity-icon" />
                        <p className="activity-time">{user.cycling_time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

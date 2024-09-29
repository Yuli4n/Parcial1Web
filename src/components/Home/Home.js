import React, { useState, useEffect } from 'react';
import Sports from './Sports';
import Profile from './Profile';
import { FormattedMessage } from 'react-intl';

const Home = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
    
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://my.api.mockaroo.com/parcial_api?key=f30258b0", {
                    headers: {
                        "X-API-Key": "f30258b0"
                    }
                });
                if (!response.ok) {
                    throw new Error("Error al obtener los datos de la API");
                }
                const data = await response.json();
                if (isMounted) { 
                    setUserData(data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };
    
        fetchUserData();
    
        return () => {
            isMounted = false;
        };
    }, []);
    
    if (loading) return <p><FormattedMessage id="loading" defaultMessage="Cargando datos..." /></p>;
    if (error) return <p><FormattedMessage id="error" defaultMessage="Error al cargar los datos" /></p>;

    return (
        <div>
            {userData.length > 0 && (
                <>
                    <Sports users={userData} />
                    <Profile user={userData[0]} />
                </>
            )}
        </div>
    );
};

export default Home;

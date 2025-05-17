import { useState, useEffect } from 'react';

export const ShipsContext = createContext();

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

    useEffect(() => {
        const storedShips = localStorage.getItem('ships');
            if (storedShips) setShips(JSON.parse(storedShips));
              }, []);

                const addShip = (ship) => {
                    const newShip = { ...ship, id: `ship_${Date.now()}` };
                        const updatedShips = [...ships, newShip];
                            setShips(updatedShips);
                                localStorage.setItem('ships', JSON.stringify(updatedShips));
                                  };

                                    return (
                                        <ShipsContext.Provider value={{ ships, addShip }}>
                                              {children}
                                                  </ShipsContext.Provider>
                                                    );
                                                    };
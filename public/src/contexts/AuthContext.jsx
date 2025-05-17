import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    const login = (email, password) => {
        const users = [
              { id: 1, email: 'admin@entnt.in', password: 'admin123', role: 'Admin' },
                    { id: 2, email: 'inspector@entnt.in', password: 'inspect123', role: 'Inspector' },
                          { id: 3, email: 'engineer@entnt.in', password: 'engine123', role: 'Engineer' }
                              ];
                                  const user = users.find(u => u.email === email && u.password === password);
                                      if (user) {
                                            setUser(user);
                                                  localStorage.setItem('currentUser', JSON.stringify(user));
                                                        return true;
                                                            }
                                                                return false;
                                                                  };

                                                                    const logout = () => {
                                                                        localStorage.removeItem('currentUser');
                                                                            setUser(null);
                                                                              };

                                                                                useEffect(() => {
                                                                                    const storedUser = localStorage.getItem('currentUser');
                                                                                        if (storedUser) setUser(JSON.parse(storedUser));
                                                                                          }, []);

                                                                                            return (
                                                                                                <AuthContext.Provider value={{ user, login, logout }}>
                                                                                                      {children}
                                                                                                          </AuthContext.Provider>
                                                                                                            );
                                                                                                            };
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the types for the context
interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface AppContextType {
  emergencyContacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (id: string) => void;
  userSettings: { darkMode: boolean };
  toggleDarkMode: () => void;
}

// Create the context with default values
const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [emergencyContacts, setEmergencyContacts] = useState<Contact[]>([]);
  const [userSettings, setUserSettings] = useState<{ darkMode: boolean }>({ darkMode: false });

  // Function to add a contact
  const addContact = (contact: Contact) => {
    setEmergencyContacts([...emergencyContacts, contact]);
  };

  // Function to remove a contact
  const removeContact = (id: string) => {
    setEmergencyContacts(emergencyContacts.filter(contact => contact.id !== id));
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setUserSettings({ darkMode: !userSettings.darkMode });
  };

  return (
    <AppContext.Provider
      value={{
        emergencyContacts,
        addContact,
        removeContact,
        userSettings,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

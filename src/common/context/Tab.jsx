import { createContext, useState } from "react";

export const TabContext = createContext();
TabContext.displayName = "Tab";

export const TabProvider = ({ children }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTab1 = () => {
		setActiveTab(0);
	};

	const handleTab2 = () => {
		setActiveTab(1);
	};

	return (
		<TabContext.Provider value={{ activeTab, handleTab1, handleTab2 }}>
			{children}
		</TabContext.Provider>
	);
};

import React from 'react';
import './layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<div>
			<header>Header</header>
			{children}
		</div>
	);
};

export default Layout;

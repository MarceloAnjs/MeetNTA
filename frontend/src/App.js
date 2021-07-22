import React from 'react'
import Routes from './routes'
import {AuthProvider} from './context/AuthProvider'

import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
	return (
		<AuthProvider>
			<Routes/>
		</AuthProvider>			
	)
}

export default App

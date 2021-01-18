import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import 'i18next';

ReactDOM.render(
	<Suspense fallback={(<div>Loaing ~~~</div>)}>
		<App />
	</Suspense>
	,document.getElementById('root'));

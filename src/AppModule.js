import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
//import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import App from "./App";
import httpClient from "./core/axios/httpClient";
import plantsApi from "./core/axios/api/plantsApi";
import {useDispatch} from "react-redux";
import {updatePermissionAndSendToServer} from "./redux/actions/user";

const AppModule = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
//	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [popout, setPopout] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			console.log('user: ', user);
			setPopout(null);
		}
		fetchData();
		dispatch(updatePermissionAndSendToServer());
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<App />
	);
}

export default AppModule;


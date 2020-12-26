import { useEffect } from 'react';
import { PORTAL_ID } from '../../../constants';

export const useClickAway = (ref, clickAwayHandler) => {
	const node = ref;
	useEffect(() => {
		const doOnClick = (event) => {
			console.log(event.target)
			if (!node.contains(event.target) && !document.querySelector(`#${PORTAL_ID}`).contains(event.target)) {
				clickAwayHandler();
			}
		};
		document.addEventListener('mousedown', doOnClick);
		return () => {
			console.log('clenaed');
			document.removeEventListener('mousedown', doOnClick);
		};
	});
	return node;
};

import { useEffect, useRef } from 'react';

export const useClickAway = (clickAwayHandler) => {
	const node = useRef();
	useEffect(() => {
		const doOnClick = (event) => {
			if (!node.current.contains(event.target)) {
				clickAwayHandler();
			}
		};
		document.addEventListener('mousedown', doOnClick);
		return () => {
			document.removeEventListener('mousedown', doOnClick);
		};
	});
	return node;
};

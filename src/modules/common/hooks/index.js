import { useEffect } from 'react';
import { PORTAL_ID } from '../../../constants';

export const useClickAway = (ref, outsideClickHandler) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && !document.querySelector(`#${PORTAL_ID}`).contains(event.target)) {
                outsideClickHandler(event);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, outsideClickHandler]);
};

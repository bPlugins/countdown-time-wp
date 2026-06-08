import { useEffect, useState } from 'react';

import { getDiff, getDays, getHours, getMinutes, getSeconds } from '../utils/functions';

const useCountdown = (destTime, isDays = true, isHours = true, isMinutes = true) => {
	const [diffTime, setDiffTime] = useState(getDiff(destTime));

	useEffect(() => {
		const interval = setInterval(() => {
			setDiffTime(getDiff(destTime));
		}, 1000);

		return () => clearInterval(interval);
	}, [destTime]);

	return getReturnValues(diffTime, isDays, isHours, isMinutes);
};

const getReturnValues = (diffTime, isDays = true, isHours = true, isMinutes = true) => {
	const days = getDays(diffTime);
	const hours = isDays ? getHours(diffTime) : (days * 24) + getHours(diffTime);
	const minutes = isHours ? getMinutes(diffTime) : (hours * 60) + getMinutes(diffTime);
	const seconds = isMinutes ? getSeconds(diffTime) : (minutes * 60) + getSeconds(diffTime);

	const expired = days + hours + minutes + seconds > 0 ? false : true;

	return { days, hours, minutes, seconds, expired };
};
export default useCountdown;
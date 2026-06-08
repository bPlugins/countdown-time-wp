import useCountdown from '../../hooks/useCountdown';
import { getTwoFixed } from '../../utils/functions';

const CountdownBoxes = ({ attributes, Box, isBackend = false, custom = {} }) => {
	const { destDate, boxIsInline, isLabels, isDays, daysLabel, isHours, hoursLabel, isMinutes, minutesLabel, isSeconds, secondsLabel, isSep } = attributes;

	const destTime = new Date(destDate).getTime();
	const { days, hours, minutes, seconds } = useCountdown(destTime, isDays, isHours, isMinutes);

	// Classes
	const boxClass = `${boxIsInline ? 'inline' : ''}`;

	return <>
		<Box
			is={isDays}
			boxClass={`countdownDays ${boxClass}`}
			digit={getTwoFixed(days)}
			isLabels={isLabels}
			label={daysLabel}
			onChange={val => isBackend && custom.setAttributes({ daysLabel: val })}
		/>
		{isSep && isDays && (isHours || isMinutes || isSeconds) && <span className='separator'></span>}


		<Box
			is={isHours}
			boxClass={`countdownHours ${boxClass}`}
			digit={getTwoFixed(hours)}
			isLabels={isLabels}
			label={hoursLabel}
			onChange={val => isBackend && custom.setAttributes({ hoursLabel: val })}
		/>
		{isSep && isHours && (isMinutes || isSeconds) && <span className='separator'></span>}


		<Box
			is={isMinutes}
			boxClass={`countdownMinutes ${boxClass}`}
			digit={getTwoFixed(minutes)}
			isLabels={isLabels}
			label={minutesLabel}
			onChange={val => isBackend && custom.setAttributes({ minutesLabel: val })}
		/>
		{isSep && isMinutes && isSeconds && <span className='separator'></span>}


		<Box
			is={isSeconds}
			boxClass={`countdownSeconds ${boxClass}`}
			digit={getTwoFixed(seconds)}
			isLabels={isLabels}
			label={secondsLabel}
			onChange={val => isBackend && custom.setAttributes({ secondsLabel: val })}
		/>
	</>;
}
export default CountdownBoxes;
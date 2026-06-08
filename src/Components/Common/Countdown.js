import CountdownBoxes from './CountdownBoxes';

const Countdown = ({ attributes, Box, closeEl, isBackend = false, custom = {} }) => {
	const { isResponsive, isDismiss } = attributes;

	return <div className='ctbCountdownTime'>
		<div className={`countdownItems ${isResponsive ? 'ctbResponsive' : ''}`}>
			<CountdownBoxes attributes={attributes} Box={Box} isBackend={isBackend} custom={custom} />
		</div>

		{isDismiss && closeEl}
	</div>
}
export default Countdown;
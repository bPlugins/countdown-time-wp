import { createRoot } from 'react-dom/client';

import { sanitizeHTML } from '../../bpl-tools/utils/common';

import './style.scss';
import Style from './Components/Common/Style';
import Countdown from './Components/Common/Countdown';
import { closeIcon } from './utils/icons';

document.addEventListener('DOMContentLoaded', () => {
	const countdownEls = document.querySelectorAll('.wp-block-ctb-countdown-time');
	countdownEls.forEach(countdownEl => {
		const attributes = JSON.parse(countdownEl.dataset.attributes);
		const content = JSON.parse(countdownEl.dataset.content);

		const closeEl = <span onClick={() => {
			countdownEl.classList.add('transformHidden');

			setTimeout(() => {
				countdownEl.style.display = 'none';
			}, 450);
		}}>{closeIcon}</span>

		createRoot(countdownEl).render(<>
			<Style attributes={attributes} id={countdownEl.id} />

			<Countdown attributes={attributes} Box={Box} closeEl={closeEl}>
				<div className='countdownExpired' dangerouslySetInnerHTML={{ __html: sanitizeHTML(content) }} />
			</Countdown>
		</>);

		countdownEl?.removeAttribute('data-attributes');
		countdownEl?.removeAttribute('data-content');
	});
});

const Box = (props) => {
	const { is, boxClass, digit, isLabels, label } = props;

	return is && <div className={`countdownItem ${boxClass}`}>
		<span className='digit'>{digit}</span>
		{(isLabels && label) && <label className='label' dangerouslySetInnerHTML={{ __html: sanitizeHTML(label) }} />}
	</div>;
};
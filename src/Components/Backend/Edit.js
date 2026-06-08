import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Tooltip } from '@wordpress/components';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import Countdown from '../Common/Countdown';
import { closeIcon } from '../../utils/icons';
import { prefix } from '../../utils/data';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const { destDate } = attributes;

	useEffect(() => {
		'' === destDate && setAttributes({
			destDate: new Date(new Date().setDate(new Date().getDate() + 2))
		});
	}, [destDate]); // Set Initial Date

	const id = `${prefix}-${clientId}`;

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div {...useBlockProps()} id={id}>
			<Style attributes={attributes} id={id} />

			<Countdown attributes={attributes} Box={Box} closeEl={<Tooltip text='Hide will only work in frontend' placement='top' position='top'>{closeIcon}</Tooltip>} isBackend={true} custom={{ setAttributes }}>
				<div className='countdownExpired'>
					<InnerBlocks template={[
						['core/heading', {
							content: 'Oops! the offers just expired!',
							textAlign: 'center',
							level: 3,
							style: {
								color: { text: '#dc3545' }
							}
						}],

						['core/paragraph', {
							content: `But don't worry! we will announce next offer as soon as possible. Stay with us.`,
							style: {
								color: { text: '#222' }
							}
						}]
					]} />
				</div>
			</Countdown>
		</div>
	</>;
};
export default Edit;

const Box = (props) => {
	const { is, boxClass, digit, isLabels, label, onChange } = props;

	return is && <div className={`countdownItem ${boxClass}`}>
		<span className='digit'>{digit}</span>
		{isLabels && <RichText className='label' tagName='span' value={label} onChange={val => onChange(val)} placeholder={__('Label', 'countdown-time')} />}
	</div>;
};
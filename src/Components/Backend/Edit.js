import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Tooltip } from '@wordpress/components';

import useIframeAssetSync from '../../../../bpl-tools/hooks/useIframeAssetSync';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import Countdown from '../Common/Countdown';
import { closeIcon } from '../../utils/icons';

const Edit = props => {
	const { attributes, setAttributes } = props;
	const { destDate } = attributes;
	const blockProps = useBlockProps();

	useIframeAssetSync(['ctb-countdown-time-editor-style-css', 'ctb-countdown-time-style-css']);

	useEffect(() => {
		'' === destDate && setAttributes({
			destDate: new Date(new Date().setDate(new Date().getDate() + 2))
		});
	}, [destDate]); // Set Initial Date

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div {...blockProps} id={blockProps.id}>
			<Style attributes={attributes} id={blockProps.id} />

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
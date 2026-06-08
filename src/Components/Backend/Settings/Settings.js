import { __ } from '@wordpress/i18n';
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, __experimentalUnitControl as UnitControl, DateTimePicker, SelectControl, PanelRow, TabPanel, RangeControl } from '@wordpress/components';

import { Label, Background, ColorControl, Typography, HelpPanel, BBlocksAds, Notice } from '../../../../../bpl-tools/Components';
import { BorderControl, SpaceControl, ShadowControl } from '../../../../../bpl-tools/Components/Deprecated';
import { AdvertiseCard, PremiumBadge, PremiumPanel } from '../../../../../bpl-tools/ProControls';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { pxUnit, perUnit, emUnit, remUnit } from '../../../../../bpl-tools/utils/options';
import { gradient, primaryColor } from '../../../../../bpl-tools/utils/data';

import { generalStyleTabs, layouts, flexPos, sepTypes } from '../../../utils/options';
import { pluginSlug, pricingUrl } from '../../../utils/data';

const Settings = ({ attributes, setAttributes }) => {
	const { destDate, layout, isResponsive, boxIsInline, boxPosition, isLabels, isDays, isHours, isMinutes, isSeconds, width, background, padding, shadow, alignment, boxBG, boxWidth, boxHeight, boxSpace, boxBorder, boxShadow, digitTypo, digitColor, labelTypo, labelColor, isSep, sepType, sepSize, sepColor } = attributes;

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={() => tabController()}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug={pluginSlug} docsLink='https://ctb.bplugins.com/docs' />


					<PanelBody className='bPlPanelBody' title={__('Countdown Settings', 'countdown-time')}>
						<Label className='mb5'>{__('Destination Date:', 'countdown-time')}</Label>
						<DateTimePicker currentDate={destDate} onChange={val => setAttributes({ destDate: val })} is12Hour={true} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Layout Settings', 'countdown-time')} initialOpen={false}>
						<PanelRow>
							<Label className=''>{__('Layout:', 'countdown-time')}</Label>
							<SelectControl value={layout} onChange={val => {
								setAttributes({ layout: val });
								'default' === val && setAttributes({
									boxIsInline: false,
									background: { type: 'solid', color: '#0000' },
									shadow: { hOffset: '0px', vOffset: '0px', color: '#0000' },
									boxBG: { type: 'gradient', color: primaryColor, gradient },
									boxSpace: '30px',
									boxBorder: { width: '0px', type: 'solid', color: '#0000', radius: '5%' },
									digitColor: '#fff',
									labelColor: '#fff',
									isSep: false,
									sepColor: primaryColor
								});
								'layout1' === val && setAttributes({
									boxIsInline: false,
									background: { type: 'gradient', gradient },
									shadow: { hOffset: '5px', vOffset: '5px', color: primaryColor },
									boxBG: { type: 'solid', color: '#0000' },
									boxSpace: '0px',
									boxBorder: { width: '0px', type: 'solid', color: '#0000', radius: '5%' },
									digitColor: '#fff',
									labelColor: '#fff',
									isSep: true,
									sepColor: '#fff'
								});
								'layout2' === val && setAttributes({
									boxIsInline: false,
									background: { type: 'solid', color: '#0000' },
									shadow: { hOffset: '0px', vOffset: '0px', color: '#0000' },
									boxBG: { type: 'solid', color: '#0000' },
									boxSpace: '30px',
									boxBorder: { width: '2px', type: 'solid', color: primaryColor, radius: '5%' },
									digitColor: primaryColor,
									labelColor: primaryColor,
									isSep: true,
									sepColor: primaryColor
								});
								'layout3' === val && setAttributes({
									boxIsInline: true,
									background: { type: 'solid', color: '#0000' },
									shadow: { hOffset: '0px', vOffset: '8px', blur: '15px', color: primaryColor },
									boxBG: { type: 'solid', color: '#0000' },
									boxSpace: '30px',
									boxBorder: { width: '0px', type: 'solid', color: '#0000', radius: '5%' },
									digitColor: primaryColor,
									labelColor: primaryColor,
									isSep: true,
									sepColor: primaryColor
								});
							}} options={layouts} />
						</PanelRow>

						<ToggleControl className='mt20' label={__('Responsive on Mobile', 'countdown-time')} checked={isResponsive} onChange={val => setAttributes({ isResponsive: val })} />

						<ToggleControl className='mt10' label={__('Box Inline?', 'countdown-time')} checked={boxIsInline} onChange={val => setAttributes({ boxIsInline: val })} />

						<ToggleControl className='mt10' label={__('Show Labels', 'countdown-time')} checked={isLabels} onChange={val => setAttributes({ isLabels: val })} />

						<ToggleControl className='mt10' label={__('Show Days', 'countdown-time')} checked={isDays} onChange={val => setAttributes({ isDays: val })} />

						<ToggleControl className='mt10' label={__('Show Hours', 'countdown-time')} checked={isHours} onChange={val => setAttributes({ isHours: val })} />

						<ToggleControl className='mt10' label={__('Show Minutes', 'countdown-time')} checked={isMinutes} onChange={val => setAttributes({ isMinutes: val })} />

						<ToggleControl className='mt10' label={__('Show Seconds', 'countdown-time')} checked={isSeconds} onChange={val => setAttributes({ isSeconds: val })} />

						<Notice status='premium' isIcon={true}>{__('Unlock expired display, hide on zero, and device visibility controls with Premium version.', 'countdown-time')}</Notice>
					</PanelBody>


					<PanelBody title={<>{__('Prefix & Suffix', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Prefix & Suffix', 'countdown-time')} description={__('Unlock prefix text, suffix button, and alignment direction controls with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody title={<>{__('Additional', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Additional', 'countdown-time')} description={__('Unlock custom ID, Class, and custom CSS styling with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Countdown', 'countdown-time')}>
						<UnitControl label={__('Width:', 'countdown-time')} labelPosition='left' value={width} onChange={val => setAttributes({ width: val })} units={[pxUnit(900), perUnit(100), emUnit(56)]} isResetValueOnUnitChange={true} />
						<small>{__('Keep width 0, to auto width.', 'countdown-time')}</small>

						<Background label={__('Background:', 'countdown-time')} value={background} onChange={val => setAttributes({ background: val })} defaults={{ color: '#0000' }} />

						<SpaceControl className='mt20' label={__('Padding:', 'countdown-time')} value={padding} onChange={val => setAttributes({ padding: val })} defaults={{ vertical: '10px', horizontal: '15px' }} />

						<ShadowControl label={__('Shadow:', 'countdown-time')} value={shadow} onChange={val => setAttributes({ shadow: val })} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Boxes', 'countdown-time')} initialOpen={false}>
						{['0px', '0%', '0em'].includes(width) ? '' : <PanelRow>
							<Label className=''>{__('Box Position:', 'countdown-time')}</Label>
							<SelectControl value={boxPosition} onChange={val => setAttributes({ boxPosition: val })} options={flexPos} />
						</PanelRow>}

						<Background label={__('Background:', 'countdown-time')} value={boxBG} onChange={val => setAttributes({ boxBG: val })} defaults={{ type: 'gradient', color: primaryColor, gradient }} />

						<UnitControl className='mt20' label={__('Width:', 'countdown-time')} labelPosition='left' value={boxWidth} onChange={val => setAttributes({ boxWidth: val })} units={[pxUnit(170), emUnit(10.5), remUnit(10.5)]} isResetValueOnUnitChange={true} />

						<UnitControl className='mt20' label={__('Height:', 'countdown-time')} labelPosition='left' value={boxHeight} onChange={val => setAttributes({ boxHeight: val })} units={[pxUnit(120), emUnit(7.5), remUnit(7.5)]} isResetValueOnUnitChange={true} />

						<UnitControl className='mt20' label={__('Space Between Boxes:', 'countdown-time')} labelPosition='left' value={boxSpace} onChange={val => setAttributes({ boxSpace: val })} units={[pxUnit(30), emUnit(2), remUnit(2)]} isResetValueOnUnitChange={true} />

						<BorderControl label={__('Border', 'countdown-time')} value={boxBorder} onChange={val => setAttributes({ boxBorder: val })} defaults={{ radius: '5%' }} />

						<ShadowControl label={__('Shadow:', 'countdown-time')} value={boxShadow} onChange={val => setAttributes({ boxShadow: val })} />
					</PanelBody>


					{isDays || isHours || isMinutes || isSeconds ? <PanelBody className='bPlPanelBody' title={__('Content', 'countdown-time')} initialOpen={false}>
						<Typography label={__('Digit Typography:', 'countdown-time')} value={digitTypo} onChange={val => setAttributes({ digitTypo: val })} defaults={{ fontSize: { desktop: 48, tablet: 40, mobile: 32 } }} />

						<ColorControl label={__('Digit Color:', 'countdown-time')} value={digitColor} onChange={val => setAttributes({ digitColor: val })} defaultColor='#fff' />

						{isLabels && <>
							<Typography className='mt20' label={__('Label Typography:', 'countdown-time')} value={labelTypo} onChange={val => setAttributes({ labelTypo: val })} defaults={{ fontSize: { desktop: 18, tablet: 17, mobile: 16 } }} />

							<ColorControl label={__('Label Color:', 'countdown-time')} value={labelColor} onChange={val => setAttributes({ labelColor: val })} defaultColor='#fff' />
						</>}
					</PanelBody> : null}


					{isDays && <PanelBody title={<>{__('Days Style', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Days Style', 'countdown-time')} description={__('Unlock individual styles for Days, Hours, Minutes, and Seconds with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>}


					{isHours && <PanelBody title={<>{__('Hours Style', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Hours Style', 'countdown-time')} description={__('Unlock individual styles for Days, Hours, Minutes, and Seconds with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>}


					{isMinutes && <PanelBody title={<>{__('Minutes Style', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Minutes Style', 'countdown-time')} description={__('Unlock individual styles for Days, Hours, Minutes, and Seconds with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>}


					{isSeconds && <PanelBody title={<>{__('Seconds Style', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Seconds Style', 'countdown-time')} description={__('Unlock individual styles for Days, Hours, Minutes, and Seconds with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>}


					<PanelBody title={<>{__('Prefix Text', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Prefix Text', 'countdown-time')} description={__('Unlock prefix text typography and color styling options with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody title={<>{__('Suffix Button', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Suffix Button', 'countdown-time')} description={__('Unlock suffix button typography, colors, and padding styling options with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Separator', 'countdown-time')} initialOpen={false}>
						<ToggleControl label={__('Show Separator', 'countdown-time')} checked={isSep} onChange={val => setAttributes({ isSep: val })} />

						{isSep && <>
							<PanelRow>
								<Label className=''>{__('Type:', 'countdown-time')}</Label>
								<SelectControl value={sepType} onChange={val => setAttributes({ sepType: val })} options={sepTypes} />
							</PanelRow>

							<Label>{__('Size:', 'countdown-time')}</Label>
							<RangeControl value={sepSize} onChange={val => setAttributes({ sepSize: val })} min={0} max={160} step={1} allowReset={true} resetFallbackValue={48} initialPosition={48} />

							<ColorControl label={__('Color:', 'countdown-time')} value={sepColor} onChange={val => setAttributes({ sepColor: val })} defaultColor={primaryColor} />
						</>}
					</PanelBody>


					<PanelBody title={<>{__('Dismiss Button', 'countdown-time')}<PremiumBadge /></>} className='bPlPanelBody' initialOpen={false}>
						<PremiumPanel title={__('Dismiss Button', 'countdown-time')} description={__('Unlock dismiss button and custom button color with Premium version.', 'countdown-time')} pricingUrl={pricingUrl} />
					</PanelBody>
				</>}
			</>}</TabPanel>

			<AdvertiseCard planLink={pricingUrl} />
		</InspectorControls>

		<BlockControls>
			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Countdown Time Alignment')} alignmentControls={[
				{ title: __('Countdown Time in left', 'countdown-time'), align: 'flex-start', icon: 'align-left' },
				{ title: __('Countdown Time in center', 'countdown-time'), align: 'center', icon: 'align-center' },
				{ title: __('Countdown Time in right', 'countdown-time'), align: 'flex-end', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};

export default Settings;
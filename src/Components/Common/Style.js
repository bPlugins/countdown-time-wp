import { sanitizeHTML } from '../../../../bpl-tools/utils/common';
import { getBackgroundCSS, getBorderCSS, getShadowCSS, getSpaceCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

import { prefix } from '../../utils/data';

const Style = ({ attributes, id }) => {
	const { boxPosition, width, background, padding, shadow, alignment, boxBG, boxWidth, boxHeight, boxSpace, boxBorder, boxShadow, digitTypo, digitColor, labelTypo, labelColor, sepType, sepSize, sepColor } = attributes;

	const mainSl = `#${id}`;
	const itemsSl = `${mainSl} .countdownItems`;
	const itemSl = `${itemsSl} .countdownItem`;
	const timeSl = `${mainSl} .${prefix}`;

	return <style dangerouslySetInnerHTML={{
		__html: sanitizeHTML(`
		${getTypoCSS('', digitTypo)?.googleFontLink}
		${getTypoCSS('', labelTypo)?.googleFontLink}
		${getTypoCSS(`${itemSl} .digit`, digitTypo)?.styles}
		${getTypoCSS(`${itemSl} .label`, labelTypo)?.styles}

		${mainSl}{
			align-items: ${alignment};
			justify-content: ${alignment};
		}
		${timeSl}{
			justify-content: 'center';
			width: ${['0px', '0%', '0em'].includes(width) ? 'auto' : width};
			${getBackgroundCSS(background)}
			padding: ${getSpaceCSS(padding)};
			box-shadow: ${getShadowCSS(shadow)};
		}
		${itemsSl}{
			justify-content: ${boxPosition};
			gap: ${boxSpace};
			margin: 0
		}
		${itemSl}{
			${getBackgroundCSS(boxBG)}
			width: ${boxWidth};
			height: ${boxHeight};
			${getBorderCSS(boxBorder)}
			box-shadow: ${getShadowCSS(boxShadow)};
		}
		${itemSl} .digit{
			color: ${digitColor};
		}
		${itemSl} .label{
			color: ${labelColor};
		}

		${itemsSl} .separator::before{
			content: '${sepType}';
			font-size: ${sepSize}px;
			color: ${sepColor};
		}
		`).replace(/\s+/g, ' ')
	}} />
}
export default Style;
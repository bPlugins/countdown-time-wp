import { registerBlockType, updateCategory } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { countdownIcon } from './utils/icons';

// Update Block Category Icon
updateCategory('CTBlock', { icon: countdownIcon(20) });

registerBlockType(metadata, {
	icon: countdownIcon(),

	// Build in Functions
	edit: Edit,

	save: () => <InnerBlocks.Content />
});
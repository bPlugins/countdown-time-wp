import { __ } from '@wordpress/i18n';

export const aligns = [
	{ label: __('Left', 'countdown-time'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('Center', 'countdown-time'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('Right', 'countdown-time'), value: 'right', icon: 'editor-alignright' },
	{ label: __('Justify', 'countdown-time'), value: 'justify', icon: 'editor-justify' }
];

export const layouts = [
	{ label: __('Default', 'countdown-time'), value: 'default' },
	{ label: __('Layout 1', 'countdown-time'), value: 'layout1' },
	{ label: __('Layout 2', 'countdown-time'), value: 'layout2' },
	{ label: __('Layout 3', 'countdown-time'), value: 'layout3' }
];

export const flexPos = [
	{ label: __('Start', 'countdown-time'), value: 'flex-start' },
	{ label: __('End', 'countdown-time'), value: 'flex-end' },
	{ label: __('Center', 'countdown-time'), value: 'center' },
	{ label: __('Space Around', 'countdown-time'), value: 'space-around' },
	{ label: __('Space Between', 'countdown-time'), value: 'space-between' },
	{ label: __('Space Evenly', 'countdown-time'), value: 'space-evenly' }
];

export const sepTypes = [
	{ label: __('Dotted', 'countdown-time'), value: ':' },
	{ label: __('Dashed', 'countdown-time'), value: '-' },
	{ label: __('Solid', 'countdown-time'), value: '|' }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'countdown-time') },
	{ name: 'style', title: __('Style', 'countdown-time') }
];
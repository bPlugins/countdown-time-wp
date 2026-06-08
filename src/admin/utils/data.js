import { __ } from '@wordpress/i18n';

import { gutenbergTabIcon } from './icons';

const slug = 'countdown-time';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro, licenseActiveNonce, startUrl, adminUrl = '' } = info;

	const proSuffix = isPremium ? ' Pro' : '';

	return {
		name: `Countdown Timer${proSuffix}`,
		displayName: `Countdown Timer${proSuffix} - Animated Countdown for Events or Launches`,
		description: 'Professionally showcase your countdown timer. This plugin adds a new block in the Block Editor by which you can create a professional-looking countdown timer block!',
		slug,
		version,
		isPremium,
		hasPro,
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
			// proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
			video: '',
			isYoutube: true
		},
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			// landing: `https://bplugins.com/products/${slug}/`,
			docs: `https://ctb.bplugins.com/docs/`,
			pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		freemius: {
			product_id: 14562,
			plan_id: 24324,
			public_key: 'pk_7f62446a2a53154c56c36346db2fa'
		},
		licenseActiveNonce,
		startButton: {
			label: 'Start Now',
			url: startUrl || `post-new.php?post_type=page&title=Countdown Timer&content=<!-- wp:ctb/countdown-time /-->`
		}
	}
}

export const welcomeInfo = (adminUrl) => ({
	keywords: ['Countdown', 'Timer', 'Animation', 'Layout'],
	keywordsLabel: 'Features',
	gettingStarted: {
		tabs: [
			{
				key: 'gutenberg',
				label: 'Gutenberg',
				icon: gutenbergTabIcon,
				steps: [
					{
						num: 1,
						title: 'Add the Countdown Timer Block',
						body: 'Open the block editor on any page or post. Click the <strong>+</strong> icon in the top-left corner or type <strong>/Countdown</strong> to find and insert the Countdown Timer block.',
						link: { url: `${adminUrl}/post-new.php?post_type=page`, label: 'Open Editor' }
					},
					{
						num: 2,
						title: 'Configure Date & Time',
						body: 'Select the block to open settings in the sidebar. Set the target <strong>date and time</strong> for your event. Customize layout template, separator style, and colors.'
					},
					{
						num: 3,
						title: 'Style Elements & Publish',
						body: 'Use style settings to customize typography sizes, weights, and colors for digits and labels. Publish when ready.'
					}
				]
			}
		]
	},
	changelogs: [
		{
			version: '1.3.3 - 09 Jun 2026',
			type: 'update',
			list: [
				'Update: SDK',
				'Update: Performance Improvement'
			]
		},
		{
			version: '1.3.2 - 04 Mar 2026',
			type: 'update',
			list: [
				'Update: Admin Dashboard - Improved UI with better navigation and clearer feature organization.'
			]
		},
		{
			version: '1.3.1 - 29 Nov 2025',
			type: 'update',
			list: [
				'Performance Improvement'
			]
		},
		{
			version: '1.3.0 - 20 Sep 2025',
			type: 'new',
			list: [
				'Add Admin Dashboard',
				'Update SDK',
				'Reduce Code for Performance'
			]
		},
		{
			version: '1.2.8 - 5 May 2025',
			type: 'fix',
			list: [
				'Fix textdomain issue.'
			]
		},
		{
			version: '1.2.7 - 17 Feb 2025',
			type: 'fix',
			list: [
				'Improve security'
			]
		}
	],
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		__('Show content when the timer expires', 'countdown-time'),
		__('Toggle visibility on mobile and tablet', 'countdown-time'),
		__('Add prefix text and suffix buttons', 'countdown-time'),
		__('Advanced typography and color styling options', 'countdown-time'),
		__('Control layout direction and single styles', 'countdown-time')
	]
})

export const demoInfo = {
	allInOneLabel: 'See All Demos',
	allInOneLink: 'https://ctb.bplugins.com/all-demos-in-one-place/',
	demos: [
		{
			title: 'Layout',
			children: [
				{
					title: 'Default',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/default/'
				},
				{
					title: 'Layout 1',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/layout-1/'
				},
				{
					title: 'Layout 2',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/layout-2/'
				},
				{
					title: 'Layout 3',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/layout-3/'
				}
			]
		},

		{
			title: 'Design',
			children: [
				{
					title: 'Design 1',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/design-1/'
				},
				{
					title: 'Design 2',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/design-2/'
				},
				{
					title: 'Design 3',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/design-3/'
				},
				{
					title: 'Design 4',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/design-4/'
				},
				{
					title: 'Design 5',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/design-5/'
				}
			]
		},
		{
			title: 'Call to Action (CTA)',
			children: [
				{
					title: 'Call to Action 1',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/call-to-action-1/'
				},
				{
					title: 'Call to Action 2',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/call-to-action-2/'
				},
				{
					title: 'Call to Action 3',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/call-to-action-3/'
				},
				{
					title: 'Call to Action 4',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/call-to-action-4/'
				},
				{
					title: 'Call to Action 5',
					type: 'iframe',
					url: 'https://ctb.bplugins.com/demo/call-to-action-5/'
				}
			]
		}
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 14562,
	planId: 24324,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3, // choose from licenses item
		text: 'Best Value'
	}
}
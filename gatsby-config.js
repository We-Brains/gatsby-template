/* eslint-disable  */
require('dotenv').config();

module.exports = {
	siteMetadata: {
		author: {
			name: 'Bla'
		}
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#323232',
				theme_color: '#323232',
				display: 'minimal-ui',
				icon: 'assets/images/fav.png'
			}
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve('./src/components/layout.tsx')
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src`
			}
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public|)/,
				stages: [ 'develop' ],
				options: {
					emitWarning: true,
					failOnError: true
				}
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\/assets\/.*.svg/
				}
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-typescript',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet'
	]
};

const path = require('path')
const sprites = require('postcss-sprites')

const cwd = (...args) => path.join(__dirname, ...args)

let spriteOpt = {
	spritePath: './build/assets/images/',
	stylesheetPath:'./src/assets/css/',
	// basePath:'./a',
	spritesmith:{
		padding:2
	},
	groupBy(image){
		console.log('groupBy:', image)
		var filebasename = path.basename(image.styleFilePath);
		return Promise.resolve( filebasename.split('.')[0] );
	},

	filterBy(image){
		var imgbasename = path.basename(image.url);

		if (!/\.png$/.test(image.url) || imgbasename[0] === '_') {
			return Promise.reject();
		}
		return Promise.resolve();
	},
	hooks: { 

		onSaveSpritesheet(opts, spritesheet){//can remove build/assets/images/app.sprite.png
			console.log('onSaveSpritesheet', spritesheet);
			return `${spritesheet.groups[0]}_sprite.png`;
		},

		
		// onUpdateRule(rule, token, image) {
		// 	console.log('________image', image);
		// 	console.log('________rule', rule);
		// 	console.log('________token', token);
		// 	const { ratio, coords, spritePath } = image
		// 	const { width, height } = coords

		// 	const posX = -1 * Math.abs(coords.x / ratio);
		// 	const posY = -1 * Math.abs(coords.y / ratio);

		// 	// token.cloneAfter({
		// 	// 	type: 'decl',
		// 	// 	prop: 'background',
		// 	// 	// value: `url(../../assets/images/${path.basename(spritePath)}) no-repeat ${posX}px ${posY}px`
		// 	// }).cloneAfter({
		// 	// 	type: 'decl',
		// 	// 	prop: 'width',
		// 	// 	value: width + "px"		
		// 	// }).cloneAfter({
		// 	// 	type: 'decl',
		// 	// 	prop: 'height',
		// 	// 	value: height + "px"				
		// 	// })
		// }
	}
}

module.exports = {
	plugins:[sprites(spriteOpt)]
}
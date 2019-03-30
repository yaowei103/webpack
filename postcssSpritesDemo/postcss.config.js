const path = require('path')
const sprites = require('postcss-sprites')

const cwd = (...args) => path.join(__dirname, ...args)

let spriteOpt = {
	spritePath: cwd('./build/assets/images'),
	stylesheetPath:cwd('./build/assets/css'),//css 引用的时候的地址
	// basePath:'../images',
	// groupBy(image){
	// 	console.log('groupBy:', image)
	// 	var filebasename = path.basename(image.styleFilePath);
	// 	return Promise.resolve( filebasename.split('.')[0] );
	// },

	// filterBy(image){
	// 	var imgbasename = path.basename(image.url);

	// 	if (!/\.png$/.test(image.url) || imgbasename[0] === '_') {
	// 		return Promise.reject();
	// 	}
	// 	return Promise.resolve();
	// },
	hooks: { 

		// onSaveSpritesheet(opts, spritesheet){
		// 	console.log('onSaveSpritesheet', spritesheet);
		// 	return cwd(`./src/assets/images/${spritesheet.groups[0]}_sprite.png`);
		// },

		// onUpdateRule(rule, token, image) {
		// 	console.log('________', image);
		// 	const { ratio, coords, spritePath } = image
		// 	const { width, height } = coords

		// 	const posX = -1 * Math.abs(coords.x / ratio);
		// 	const posY = -1 * Math.abs(coords.y / ratio);

		// 	token.cloneAfter({
		// 		type: 'decl',
		// 		prop: 'background',
		// 		value: `url(${path.relative(spritePath)}) no-repeat ${posX}px ${posY}px`
		// 	}).cloneAfter({
		// 		type: 'decl',
		// 		prop: 'width',
		// 		value: width + "px"		
		// 	}).cloneAfter({
		// 		type: 'decl',
		// 		prop: 'height',
		// 		value: height + "px"				
		// 	})
		// }
	}
}

module.exports = {
	plugins:[sprites(spriteOpt)]
}
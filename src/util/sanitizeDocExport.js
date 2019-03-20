const sanitize = require('sanitize-html')
const cheerio = require('cheerio')

function sanitizeDocExport(buffer) {
	const h = cheerio.load(buffer.toString())

	h('span')
		.filter((i, elem) => h(elem).attr('style') === 'font-weight:700')
		.each((i, elem) => {
			const text = h(elem).text()
			h(elem)
				.after(`<strong>${text}</strong>`)
				.remove()
		})

	const options = {
		allowedTags: sanitize.defaults.allowedTags.concat(['h1', 'h2', 'img'])
	}

	return Buffer.from(sanitize(h.html(), options))
}

module.exports = sanitizeDocExport

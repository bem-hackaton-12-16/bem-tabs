module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.js' }],
    mods: { theme: 'islands' },
    content: [
    	{
    		block: 'tabs',
    		content: 'tabs'
    	}
    ]
};
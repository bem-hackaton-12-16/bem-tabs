var levels = [
        './node_modules/bem-core/common.blocks',
        './node_modules/bem-core/desktop.blocks',
        'common.blocks'],
    enbBemTechs = require('enb-bem-techs'),
    BemtreeTech = require('enb-bemxjst/techs/bemtree'),
    BemhtmlTech = require('enb-bemxjst/techs/bemhtml'),
    BrowserJsTech = require('enb-js/techs/browser-js'),
    BemjsonToHtmlTech = require('enb-bemxjst/techs/bemjson-to-html'),
    techs = {
        fileProvider: require('enb/techs/file-provider'),
        postcss : {
            core: require('enb-postcss/techs/enb-postcss'),
            plugins: [
                require('postcss-import')(),
                require('rebem-css'),
                require('postcss-simple-vars')(),
                require('postcss-calc')()
            ]
        },
        browserJS : require('enb-js/techs/browser-js')
    };

module.exports = function(config) {

    config.nodes('*.bundles/*', function(nodeConfig) {

        // Получаем BEMJSON-файл
        nodeConfig.addTech([techs.fileProvider, { target: '?.bemjson.js' }]);

        nodeConfig.addTechs([
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [techs.postcss.core, {
                target : '?.css',
                plugins: techs.postcss.plugins
            }],
            [techs.browserJS, {
                target : '?.js',
                includeYM : true
            }]
        ]);

        nodeConfig.addTargets(['?.css']);

        // Создаем BEMTREE-файл
        nodeConfig.addTech(BemtreeTech);
        nodeConfig.addTarget('?.bemtree.js');

        nodeConfig.addTech([BrowserJsTech, { /* опции технологии */ }]);
        nodeConfig.addTarget('?.js');

         // Создаем BEMHTML-файл
        nodeConfig.addTech(BemhtmlTech);
        nodeConfig.addTarget('?.bemhtml.js');

        // Создаем HTML-файл
        nodeConfig.addTech(BemjsonToHtmlTech);
        nodeConfig.addTarget('?.html');

    });
};
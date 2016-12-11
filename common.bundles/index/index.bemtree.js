var BEMTREE;

(function(global) {
    function buildBemXjst(__bem_xjst_libs__) {
        var exports = {};

        exports.apply = function (data) { return data; };

        return exports;
    };

    

    var defineAsGlobal = true;

    // Provide with CommonJS
    if (typeof module === 'object' && typeof module.exports === 'object') {
        exports['BEMTREE'] = buildBemXjst({
    
}
);
        defineAsGlobal = false;
    }

    // Provide to YModules
    if (typeof modules === 'object') {
        modules.define(
            'BEMTREE',
            [],
            function(
                provide
                
                ) {
                    provide(buildBemXjst({
    
}
));
                }
            );

        defineAsGlobal = false;
    }

    // Provide to global scope
    if (defineAsGlobal) {
        BEMTREE = buildBemXjst({
    
}
);
        global['BEMTREE'] = BEMTREE;
    }
})(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);

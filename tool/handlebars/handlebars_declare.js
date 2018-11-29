'use strict';
var map = require('vinyl-map');
var path = require('path');
var extend = require('xtend');

var processNameByPath = function(filePath, _basePath) {
    // complex control templates
    var parts;
    if (filePath.indexOf('commonui' + path.sep) >= 0) {
        parts = path.dirname(filePath).split(path.sep);
        return parts[parts.length - 1] + '.' + path.basename(filePath, path.extname(filePath));
    }
    // Make the directory relative
    filePath = path.relative(process.cwd(), filePath);

    // Split the path into its components based on the separator
    parts = filePath.split(_basePath + path.sep);
    parts = (parts[1] || parts[0]).split(path.sep);

    // Remove and process template name
    var templateName = path.basename(parts.pop(), path.extname(filePath));

    // Add template name back
    parts.push(templateName);

    // Turn the path into dot notation
    return parts.join('.');
};

module.exports = function(options) {
    options = extend({
        processName: processNameByPath,
        namespace: 'this',
        basePath: 'templates'
    }, options);


    var declareNamespace = function(contents, filename) {
        contents = contents.toString();

        // Get the name of the template
        var name = options.processName(filename, options.basePath);

        // Get namespace information for the final template name
        return options.namespace + '[' + JSON.stringify(name) + '] = ' + contents + ';';
    };

    return map(declareNamespace);
};

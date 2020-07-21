var app = require('./the.js')('SnakegameBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');

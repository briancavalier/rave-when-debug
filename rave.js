module.exports = enableWhenMonitor;

function enableWhenMonitor(context) {
	var env = context.env;
	if (env.debug || env.when && env.when.debug) {
		return require.async('when/monitor/console').then(function() {
			return {};
		});
	}
	return Promise.resolve({});
}

var config = {};
config.staging = {
port:3000,
envName:"staging server"
};

config.production = {
    port:8080,
    envName:"prodcution"
}

var environmentName = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV:'';
var selectedConfig = typeof(config[environmentName])=='object'?config[environmentName]:config.staging;


module.exports = selectedConfig;
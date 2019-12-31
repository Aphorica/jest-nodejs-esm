// Example Babel 7 config
// with esm (most of the time)
// but Babel handles modules in test
// so Jest works

// target node version for Babel transpilation
const NODE_TARGET = 10;

// default settings for preset-env
const presetEnv = {
    "targets": {
        "node": NODE_TARGET,
    }
};

// set modules to false for everything but test environment
// we normally let esm handle this,
// but Jest doesn't interact well with esm
if(process.env.NODE_ENV !== 'test') {
    presetEnv.modules = false;
}

const presets = [
    // use presetEnv settings determined above
    ["@babel/preset-env", presetEnv],
];

// export the Babel 7 config
module.exports = {
    presets,
};

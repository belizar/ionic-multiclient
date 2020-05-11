const fs = require('fs-extra')


const getClient = (args) => {
    const clientIndex = args.findIndex((item) => item === '--client');
    if(clientIndex == -1) return null;
    
    return args.slice(clientIndex + 1)[0];
}

const provideResources = (client) => {
    console.log('-----------------------');
    console.log('copying resources folder');
    console.log('-----------------------');

    fs.removeSync('resources');
    fs.copySync(`clients/${client}/resources`, 'resources');
}

const provideConfigXML = (client) => {
    console.log('-----------------------');
    console.log('copying config.xml file');
    console.log('-----------------------');
    
    fs.removeSync('config.xml')
    fs.copyFileSync(`clients/${client}/config.xml`, 'config.xml');
}


const provideClient = (ctx) => {
    const clientName = getClient(ctx.argv);
    console.log(`Providing for client: ${clientName}`);
    provideResources(clientName);
    provideConfigXML(clientName);
}

 provideClient(process);


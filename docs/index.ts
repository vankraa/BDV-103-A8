import server from './server'

const docsPort = (global as any).DOCS_PORT as number ?? 3001
server(docsPort).then(() => { console.log('Exiting Application') }).catch((err) => { console.error(err) })

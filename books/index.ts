import server from './server'

const booksPort = (global as any).BOOKS_PORT as number ?? 3000
server(booksPort).then(() => { console.log('Exiting Application') }).catch((err) => { console.error(err) })

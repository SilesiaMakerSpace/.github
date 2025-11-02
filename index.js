
// import root from './locate/i18n.json'
// import en from './locate/EN/dictionary.json'
// import de from './locate/DE/dictionary.json'
// import pl from './locate/PL/dictionary.json'
// import es = await import('./locate/ES/dictionary.json'
// const ru = await import('./locate/RU/dictionary.json'
// const ua = await import('./locate/UA/dictionary.json', {
//   with: { type: 'json' },
// })
// const ro = await import('./locate/RO/dictionary.json', {
//   assert: { type: 'json' },
// })
import { createRequire } from 'node:module';


const LANGCHAIN = "en-de-pl-es-ru-ua-ro"


const LOCALES = Object.assign(
    {
        messages: Object.fromEntries(
            new Map(
                LANGCHAIN.split(
                    "-"
                ).map(
                    (x)=>(
                        [
                            x,
                            createRequire(
                                import.meta.url
                            )(
                                `./locate/${x.toUpperCase()}/dictionary.json`
                            )
                        ]
                    )
                )
            )
        )
    },createRequire(
        import.meta.url
    )(
        './locate/i18n.json'
    )
)
//console.log(LOCALES)

export default LOCALES
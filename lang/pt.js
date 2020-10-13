/** @define {boolean} */ const SUPPORT_LANG_PT = true

if (SUPPORT_LANG_PT) {
  // noinspection ThisExpressionReferencesGlobalObjectJS
  ;(function(root) {
    FlexSearch.registerLanguage(
      'pt',
      /** @const */ {
        /**
         * http://www.ranks.nl/stopwords
         * @type {Array<string>}
         * @export
         */

        filter: [
          'a', 
          'ao', 
          'aos', 
          'aquela', 
          'aquelas', 
          'aquele', 
          'aqueles', 
          'aquilo', 
          'as', 
          'até', 
          'com', 
          'como', 
          'da', 
          'das', 
          'de', 
          'dela', 
          'delas', 
          'dele', 
          'deles', 
          'depois', 
          'do',
          'dos', 
          'e', 
          'ela', 
          'elas', 
          'ele', 
          'eles', 
          'em', 
          'entre', 
          'era', 
          'eram', 
          'essa', 
          'essas', 
            'esse', 'esses', 'esta', 'estamos', 'estas', 'estava', 'estavam', 'este', 'esteja', 'estejam', 'estejamos', 'estes', 'esteve', 'estive', 'estivemos', 'estiver', 'estivera', 'estiveram', 'estiverem', 'estivermos', 'estivesse', 'estivessem', 'estivéramos', 'estivéssemos', 'estou', 'está', 'estávamos', 'estão', 'eu', 'foi', 'fomos', 'for', 'fora', 'foram', 'forem', 'formos', 'fosse', 'fossem', 'fui', 'fôramos', 'fôssemos', 'haja', 'hajam', 'hajamos', 'havemos', 'hei', 'houve', 'houvemos', 'houver', 'houvera', 'houveram', 'houverei', 'houverem', 'houveremos', 'houveria', 'houveriam', 'houvermos', 'houverá', 'houverão', 'houveríamos', 'houvesse', 'houvessem', 'houvéramos', 'houvéssemos', 'há', 'hão', 'isso', 'isto', 'já', 'lhe', 'lhes', 'mais', 'mas', 'me', 'mesmo', 'meu', 'meus', 'minha', 'minhas', 'muito', 'na', 'nas', 'nem', 'no', 'nos', 'nossa', 'nossas', 'nosso', 'nossos', 'num', 'numa', 'não', 'nós', 'o', 'os', 'ou', 'para', 'pela', 'pelas', 'pelo', 'pelos', 'por', 'qual', 'quando', 'que', 'quem', 'se', 'seja', 'sejam', 'sejamos', 'sem', 'serei', 'seremos', 'seria', 'seriam', 'será', 'serão', 'seríamos', 'seu', 'seus', 'somos', 'sou', 'sua', 'suas', 'são', 'só', 'também', 'te', 'tem', 'temos', 'tenha', 'tenham', 'tenhamos', 'tenho', 'terei', 'teremos', 'teria', 'teriam', 'terá', 'terão', 'teríamos', 'teu', 'teus', 'teve', 'tinha', 'tinham', 'tive', 'tivemos', 'tiver', 'tivera', 'tiveram', 'tiverem', 'tivermos', 'tivesse', 'tivessem', 'tivéramos', 'tivéssemos', 'tu', 'tua', 'tuas', 'tém', 'tínhamos', 'um', 'uma', 'você', 'vocês', 'vos', 'à', 'às', 'éramos'
        ],

        /**
         * @type {Object<string, string>}
         * @export
         */

        stemmer: {
          ational: 'ate',
          iveness: 'ive',
          fulness: 'ful',
          ousness: 'ous',
          ization: 'ize',
          tional: 'tion',
          biliti: 'ble',
          icate: 'ic',
          ative: '',
          alize: 'al',
          iciti: 'ic',
          entli: 'ent',
          ousli: 'ous',
          alism: 'al',
          ation: 'ate',
          aliti: 'al',
          iviti: 'ive',
          ement: '',
          enci: 'ence',
          anci: 'ance',
          izer: 'ize',
          alli: 'al',
          ator: 'ate',
          logi: 'log',
          ical: 'ic',
          ance: '',
          ence: '',
          ness: '',
          able: '',
          ible: '',
          ment: '',
          eli: 'e',
          bli: 'ble',
          ful: '',
          ant: '',
          ent: '',
          ism: '',
          ate: '',
          iti: '',
          ous: '',
          ive: '',
          ize: '',
          al: '',
          ou: '',
          er: '',
          ic: '',
        },
      }
    )
  })(this)
}

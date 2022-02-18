import { timemap } from './lib'

export default {
  gsheets: [{
    name: 'gvp',
    path: '1-XU2Q9s3IXNF_UOZKW-lL1MtiebRXFOQmIl6pWPMsdQ',
    tabs: timemap.prefixedTabs(false, false, [
      {
        name: 'eventos',
        format: 'deeprows',
      },
      {
        name: 'cais',
        format: 'rows',
      },
      {
        name: 'menus',
        format: 'columns',
      },
      {
        name: 'victimas',
        format: 'rows',
      },
      {
        name: '_ASSOCIATIONS_EXP',
        format: 'deeprows',
      },
    ]),
  }]
  // xlsx: [
  //   {
  //     name: 'gvp',
  //     path: 'data/timemap_data.xlsx',
  //     tabs: timemap.default
  //   }
  // ]
}

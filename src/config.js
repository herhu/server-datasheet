import { timemap } from './lib'

export default {
  gsheets: [{
    name: 'gvp',
    path: '12YTEdh8rc75UVTcOx1Mv6dimbg-cGF4OJISZ4zqcW_U',
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

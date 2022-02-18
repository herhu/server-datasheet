import BP from './lib/blueprinters'

function blueprintExists(format) {
  return typeof format === 'string' && format in BP
}

function prefixedTabs(prefix, cfg, sheets) {
  if (!sheets) return
  if (!cfg) cfg = {}

  const ret = {}

  sheets.forEach((sheet) => {
    const format = sheet.format
    let cb

    if (Array.isArray(format)) {
      cb = format.filter((f) => blueprintExists(f)).map((f) => BP[f])
    } else if (blueprintExists(format)) {
      cb = BP[format]
    }

    ret[sheet.name] = cb
  })

  return ret

  // return {
  //   [`${prf('eventos')}eventos`]: BP.deeprows,
  //   [`${prf('cais')}cais`]: BP.rows,
  //   [`${prf('menus')}menus`]: BP.columns,
  //   [`${prf('victimas')}victimas`]: BP.rows,
  //   [`${prf('_ASSOCIATIONS_EXP')}_ASSOCIATIONS_EXP`]: BP.deeprows,
  // };
}

export const timemap = {
  default: prefixedTabs(),
  prefixedTabs
}
export const trim = () => {
  const TRIM_RE = /^\s+|\s+$/g

  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}

export function $c(staticClassName, conditionalClassNames) {
  const classNames = []
  if (typeof conditionalClassNames === 'undefined') {
    conditionalClassNames = staticClassName
  } else {
    classNames.push(staticClassName)
  }

  for (const className in conditionalClassNames) {
    if (conditionalClassNames[className]) {
      classNames.push(className)
    }
  }
  return classNames.join(' ')
}

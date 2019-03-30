function pathToSlug(path) {
  return `/${path.replace(/ /g, '-').toLowerCase()}/`
}

function groupToProjectPageObject(group) {
  const settingsNode = group.edges.find(edge => edge.node.base === 'settings.json').node
  const contentNode = group.edges.find(edge => edge.node.base === 'content.html').node

  return {
    pagePath: pathToSlug(settingsNode.relativeDirectory),
    relativeDirectory: settingsNode.relativeDirectory,
    settings: JSON.parse(settingsNode.content),
    content: contentNode.content
  }
}

module.exports = {
  pathToSlug,
  groupToProjectPageObject
}

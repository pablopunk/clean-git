const test = require('ava')
const c = require('.')

test('Test this repo', async t => {
  await c({baseDir: '.'}).then(t.pass())
})

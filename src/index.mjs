import * as core from '@actions/core'
import { fetchVersion } from './fetch-version.mjs'

try {
  const url = core.getInput('url')
  const version = await fetchVersion(url)
  core.setOutput('version', version)
} catch (error) {
  core.setFailed(error.message)
}

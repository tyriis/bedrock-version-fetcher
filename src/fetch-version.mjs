import 'zx/globals'
import fetch from 'node-fetch'
import * as htmlparser2 from 'htmlparser2'
/* global $ echo */

$.verbose = false

const debug = process.env.NODE_LOG_LEVEL === 'debug'

const URL = 'https://www.minecraft.net/de-de/download/server/bedrock/'
// we need to overwrite the USER_AGENT otherwise the server does not respond
const USER_AGENT =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'

export const fetchVersion = async (url) => {
  const requestURL = url ?? URL
  if (debug) {
    echo`${JSON.stringify({ requestURL }, null, 2)}`
  }
  const response = await fetch(requestURL, {
    headers: {
      'User-Agent': USER_AGENT,
    },
  })
  if (debug) {
    echo`${JSON.stringify({ response }, null, 2)}`
  }
  const body = await response.text()
  let version
  const parser = new htmlparser2.Parser({
    onopentag(tagName, attribs) {
      if (tagName === 'a' && attribs['data-platform'] === 'serverBedrockLinux') {
        version = attribs.href
          .replace('https://minecraft.azureedge.net/bin-linux/bedrock-server-', '')
          .replace('.zip', '')
      }
    },
  })
  parser.write(body)
  parser.end()
  if (!version) {
    throw new Error('no version found!')
  }
  if (debug) {
    echo`${JSON.stringify({ version }, null, 2)}`
  }
  return version
}

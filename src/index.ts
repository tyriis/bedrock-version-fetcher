import * as dotenv from 'dotenv'

dotenv.config()

import { logger } from '@strg/logging-winston'
import fetch from 'node-fetch'
import { Response } from 'node-fetch'
import * as htmlparser2 from 'htmlparser2'


const url = 'https://www.minecraft.net/de-de/download/server/bedrock/'

const getData = async (url: string) => {
  try {
    const response: Response = await fetch(url)
    const body: string = await response.text()
    let version: string = '0'
    const parser = new htmlparser2.Parser({
      onopentag(tagName: string, attribs: {[s: string]: string}) {
        if (tagName === "a" && attribs['data-platform'] === "serverBedrockLinux") {
            version = attribs.href.replace('https://minecraft.azureedge.net/bin-linux/bedrock-server-', '').replace('.zip', '')
        }
      }
    })
    parser.write(body)
    parser.end()
    logger.info(version)
  } catch (error) {
    logger.error(error)
  }
}

getData(url);

logger.debug('test')

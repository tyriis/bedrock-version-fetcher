import * as htmlparser2 from 'htmlparser2'
const url = 'https://www.minecraft.net/de-de/download/server/bedrock/'

try {
  const response = await fetch(url)
  const body = await response.text()
  let version = '0'
  const parser = new htmlparser2.Parser({
    onopentag(tagName, attribs) {
      if (tagName === "a" && attribs['data-platform'] === "serverBedrockLinux") {
          version = attribs.href
            .replace('https://minecraft.azureedge.net/bin-linux/bedrock-server-', '')
            .replace('.zip', '')
      }
    }
  })
  parser.write(body)
  parser.end()
  console.info(version)
} catch (error) {
  console.error(error)
}


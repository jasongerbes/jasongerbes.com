import { DocumentGen } from 'contentlayer/core'
import readingTime, { ReadTimeResults } from 'reading-time'
import * as fs from 'node:fs/promises'
import path from 'node:path'

export const contentDirPath = 'src/content'

export const getReadingTime = (doc: DocumentGen): ReadTimeResults => {
  return readingTime(doc.body.raw)
}

export const getLastUpdatedDate = async (doc: DocumentGen): Promise<Date> => {
  const stats = await fs.stat(
    path.join(contentDirPath, doc._raw.sourceFilePath)
  )
  return stats.mtime
}

import { defineDocumentType } from 'contentlayer/source-files'
import { Image } from '../nested-types/Image'

const categories: string[] = [
  'React',
  'JavaScript',
  'TypeScript',
  'CSS',
  'Icons',
  'Accessibility',
  'Animations',
  'Products',
  'Websites',
  'Learning',
  'AI',
  'MDX',
  'Security',
  'Tools',
]

export const CoolThing = defineDocumentType(() => ({
  name: 'CoolThing',
  filePathPattern: `cool-things/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the thing',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A description of the thing',
      required: true,
    },
    logoImage: {
      type: 'nested',
      description: 'The logo image for the thing',
      required: true,
      of: Image,
    },
    websiteUrl: {
      type: 'string',
      description: 'Website URL of the thing',
      required: true,
    },
    categories: {
      type: 'list',
      description: 'The categories of the thing',
      required: true,
      of: {
        type: 'enum',
        options: categories,
      },
    },
    onThisSite: {
      type: 'boolean',
      description: 'Indicates whether this thing is used on this site',
      required: false,
    },
    coolFactor: {
      type: 'number',
      description: 'A rating of how cool the thing is',
      required: true,
    },
    addedDate: {
      type: 'date',
      description: 'The date the thing was added',
      required: true,
    },
    isArchived: {
      type: 'boolean',
      description: 'Indicates whether the thing is no longer cool :(',
      required: true,
    },
  },
  computedFields: {
    id: {
      type: 'string',
      desciption: 'The unique identifier of the thing, aka slug',
      resolve: (thing) =>
        thing._raw.flattenedPath.replace(/^cool-things\//, ''),
    },
    url: {
      type: 'string',
      description: 'The URL of the thing',
      resolve: (thing) =>
        thing._raw.flattenedPath.replace(/^cool-things/, '/cool-stuff'),
    },
  },
}))

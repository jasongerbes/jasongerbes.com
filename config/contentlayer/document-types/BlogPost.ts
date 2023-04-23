import { defineDocumentType } from 'contentlayer/source-files'
import { getLastUpdatedDate, getReadingTime } from '../utils'

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog-posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A description of the blog post',
      required: true,
    },
    publishDate: {
      type: 'date',
      description: 'The date the blog post was published',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      description: 'Indicates whether the blog post has been published',
      required: true,
    },
  },
  computedFields: {
    id: {
      type: 'string',
      desciption: 'The unique identifier of the blog post, aka slug',
      resolve: (post) => post._raw.flattenedPath.replace(/^blog-posts\//, ''),
    },
    url: {
      type: 'string',
      description: 'The URL of the blog post',
      resolve: (post) =>
        post._raw.flattenedPath.replace(/^blog-posts/, '/blog'),
    },
    readingTime: {
      type: 'json',
      description:
        'The approximate reading time of the post as a `ReadTimeResults` object.',
      resolve: getReadingTime,
    },
    lastUpdatedDate: {
      type: 'date',
      description: 'The date the post was last updated',
      resolve: getLastUpdatedDate,
    },
  },
}))

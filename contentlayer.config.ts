import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

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
  },
}))

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: {
      type: 'string',
      description: 'The src URL of the image',
      required: true,
    },
    darkSrc: {
      type: 'string',
      description: 'The src URL of the dark variation of the image (optional)',
      required: false,
    },
    theme: {
      type: 'enum',
      description:
        'The preferred color theme for displaying the image (optional)',
      options: ['auto', 'light', 'dark'],
      default: 'auto',
    },
  },
}))

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
        options: [
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
        ],
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
      resolve: (post) => post._raw.flattenedPath.replace(/^cool-things\//, ''),
    },
    url: {
      type: 'string',
      description: 'The URL of the thing',
      resolve: (post) =>
        post._raw.flattenedPath.replace(/^cool-things/, '/cool-stuff'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost, CoolThing],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
        },
      ],
    ],
  },
})

import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { s } from 'hastscript'

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
    logoImg: {
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
      resolve: (post) => post._raw.flattenedPath.replace(/^cool-stuff\//, ''),
    },
    url: {
      type: 'string',
      description: 'The URL of the thing',
      resolve: (post) =>
        post._raw.flattenedPath.replace(/^cool-stuff/, '/cool-things'),
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
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaHidden: true,
            tabIndex: -1,
          },
          content: [
            s(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewbox: '0 0 256 256',
                fill: 'currentColor',
                ariaHidden: true,
              },
              [
                s('path', {
                  d: 'M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z',
                }),
              ]
            ),
          ],
        },
      ],
    ],
  },
})

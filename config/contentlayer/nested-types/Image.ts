import { defineNestedType } from 'contentlayer/source-files'

export const Image = defineNestedType(() => ({
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

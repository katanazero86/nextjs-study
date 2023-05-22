export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'author',
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'user',
        },
      ],
    },
    {
      title: 'image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'content',
      name: 'content',
      type: 'string',
    },
    {
      title: 'likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'author',
              name: 'author',
              type: 'reference',
              to: [
                {
                  type: 'user',
                },
              ],
            },
            {
              title: 'comment',
              name: 'comment',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'image',
    },
  },
}

/**
 * post 스키마의 타입은 document
 * author, image, likes, comments 속성을 가짐
 * comments 의 comment 는 document 타입이며, author, comment 속성을 가짐
 */

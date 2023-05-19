export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'userName',
      name: 'userName',
      type: 'string',
    },
    {
      title: 'name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'userImage',
      name: 'userImage',
      type: 'string',
    },
    {
      title: 'following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      // validation: Rule => Rule.custom((field, context) => (context.document.flag && field === undefined) ? "This field must not be empty." : true)
      validation: (Rule) => [
        Rule.unique(),
        Rule.custom((field, context) => {
          if (field === undefined) return true
          const filter = field.filter((value) => value._ref === context.document._id.split('.')[1])
          return filter.length !== 0 ? '자신을 팔로잉 하시면 안됩니다.' : true
        }),
      ],
    },
    {
      title: 'followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => [
        Rule.unique(),
        Rule.custom((field, context) => {
          if (field === undefined) return true
          const filter = field.filter((value) => value._ref === context.document._id.split('.')[1])
          return filter.length !== 0 ? '자신을 팔로워 하시면 안됩니다.' : true
        }),
      ],
    },
    {
      title: 'bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'post',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}

/**
 * user 스키마의 타입은 document
 * userName, name, email, userImage, following, followers, bookmarks 속성을 가짐
 * following 은 user 스키마를 참조할거임 / 중복을 허용하지 말아야 하므로 validation 추가
 */

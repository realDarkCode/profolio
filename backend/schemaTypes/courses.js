export default {
    name: 'courses',
    title: 'Courses',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'outline',
            title: 'Outline',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1).error('At least one outline item is required.'),
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(0).error('Price must be a positive number.'),
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'student',
            title: 'Number of Students',
            type: 'number',
            validation: (Rule) =>
                Rule.min(0)
                    .error('Number of students must be a non-negative value.'),
        },
    ],
};

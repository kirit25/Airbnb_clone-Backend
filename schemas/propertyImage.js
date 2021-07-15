export default {
    name: 'propertyImage',
    title: 'PropertyImage',
    type: 'image',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            option: {
                isHighlight: true
            }
        },
    ],
    options: {
        hotspot: true,
    }
}
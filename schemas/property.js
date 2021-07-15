export default {
    name: 'property',
    title:'Property',
    type:'document',
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'location',
        title: 'Location',
        type: 'geopoint'
    },
    {
        name: 'propertyType',
        title: 'Property Type',
        type: 'string',
        options: {
            list: [
                { title: 'House', value: 'House' },
                { title: 'flat', value: 'flat'},
                { title: 'Bed and Breakfast', value: 'bed-and-breakfast' },
                { title: 'Boutique Hotel', value: 'boutique=hotel' },
            ],
            layout: 'radio'
        }
    },
    {
        name: 'mainImage',
        title: 'Main Image',
        type:'image',
        options: {
            hotspot: true,
        },
    },
    {
        name: 'image',
        title: 'Images',
        type: 'array',
        of: [{type: 'propertyImage'}]
    },
    {
        name: 'pricePerNight',
        title: 'Price per Night',
        type: 'number',
    },
    {
        name: 'beds',
        title: 'Beds',
        type: 'number',
    },
    {
        name: 'bedroom',
        title: 'Bedrooms',
        type: 'number',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options:{
            source: 'title',
            maxLength: 100,
        },
    },
    {
        name: 'id',
        title: 'ID',
        type: 'number',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string',
    },
    {
        name: 'host',
        title: 'Host',
        type: 'host',
    },
    { 
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{type: 'review'}]
    }
    ]
}

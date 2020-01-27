import GalleryArticle from "../components/GalleryArticle";

export class PhotoGallery {
    name: string;
    coverPhotoID: string;
    baseURL: string;
    gallery: Array<Photo>;

    coverPhotoURI = () => `${this.baseURL}/${this.coverPhotoID}`;

    constructor(
        name: string,
        coverPhotoID: string,
        baseURL: string,
        gallery: Array<Photo>,
    ) {
        this.name = name;
        this.coverPhotoID = coverPhotoID;
        this.baseURL = baseURL;
        this.gallery = gallery;
    }
}

export class Photo {
    uri: string;
    name: string | null;
    text: string | null;
    date: string | null;
    tags: Array<string>;

    constructor(
        uri: string, 
        name: string | null, 
        text: string | null = null, 
        date: string | null = null, 
        tags: Array<string> = []
    ) {
        this.uri = uri;
        this.name = name;
        this.text = text;
        this.date = date;
        this.tags = tags;
    }
}

const Galleries: Map<string, PhotoGallery> = new Map();

// People in Moments
const PeopleInMoments = new PhotoGallery(
    "People In Moments", "154A2182.jpg", "https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/peopleinmoments", [

        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A2182.jpg',
                    'Overlooking', null, 'Reykjavic, Iceland', ['Sunset']),

        new Photo("https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A2172.jpg",
                    "Overlooking 2", null, "Reykjavik, Iceland", ["Sunset"]),

        new Photo("https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A2255.jpg",
                    "Red", null, "Reykavic, Iceland", ["Sunset", "Portrait"]),
        
        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A0398-Edit-Edit.jpg',
                    'Black Door', 'In locked position it waits', 'Now', ['Portrait']),

        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A0394.jpg',
                    'Black Door Snow Exploration', 'In locked position it waits', '', []),
        
        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A1523.jpg',
                    'Dans tes yeux', null, null, []),
    ]
);
Galleries.set("People in Moments", PeopleInMoments);

// Natural
const Natural = new PhotoGallery(
    "Natural", "154A0394-copy.jpg", "https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/peopleinmoments", [

        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A0394-copy.jpg',
            null, null, null, ['Sunset']),

        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A1636%20copy.jpg',
            'Snow 2', null, null, ["Nature"]),

        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A1787.jpg',
            'Water Droplet', null, null, ["Macro", "High Speed Photography", "Water"]),

        new Photo('https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/154A1812.jpg', 
            'Water Droplet Marble', null, null, ["Macro", "High Speed Photography", "Water"]),
    ]
);

Galleries.set("Natural", Natural);

// Introspection
const Introspection = new PhotoGallery(
    "Introspection", "154A1408_both.jpg", "https://panacea-dalofeco.s3.us-east-1.amazonaws.com/images/introspection", [
        new Photo('154A1408_both.jpg', 
            null, 'Can you look into your own eyes without a mirror?', null, ['Self Portrait', 'Introspection']),
    ]
)


Galleries.set("Introspection", Introspection);


export default Galleries;
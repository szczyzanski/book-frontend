class InnerTag {
    value: String;
}

class InnerAuthor {
    name: String;
}

export class BookWithFullInfo {
    isbn: number;
    title: String;
    publisher: String;
    noOfPages: number;
    originalTitle: String;
    origin: String;
    authors: InnerAuthor[];
    tags: InnerTag[];
}
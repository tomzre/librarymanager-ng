export class Book {

  id: number;
  title: string;
  authorId: number;
  year: number;
  language: string;
  pages: number;
  typeId: number;
  imageSource: string;

  constructor(id: number,
            title: string,
            authorId: number,
            year: number,
            language: string,
            pages: number,
            typeId: number,
            imageSource: string) {

    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this. year = year;
    this.language = language;
    this.pages = pages;
    this.typeId = typeId;
    this.imageSource = imageSource;
  }

}

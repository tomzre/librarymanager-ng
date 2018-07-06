import { Author } from './author';

export class Book {

  constructor(public id: number,
            public title: string,
            public authorId: number,
            public year: number,
            public language: string,
            public pages: number,
            public typeId: number,
          public imageSource: string,
          public authorDto: Author) {
  }

}

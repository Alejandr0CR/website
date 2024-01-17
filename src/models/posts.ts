abstract class Content {
  //
}


export class ImageContent extends Content {
  constructor(
    public url : (null | URL) = null,
    public alt : (null | string) = null,
    public caption : (null | string) = null,
    ) {
    super();
  }
}


export class TextContent extends Content {
  constructor(
    public text: (null | string) = null,
    ) {
    super();
  }
}


export class CodeContent extends Content {
  constructor(
    public code: (null | string) = null,
    public language: (null | string) = null,
    ) {
    super();
  }
}


export class VideoContent extends Content {
  constructor(
    public url: (null | URL) = null,
    ) {
    super();
  }
}


export class AudioContent extends Content {
  constructor(
    public url: (null | URL) = null,
    ) {
    super();
  }
}


export class LinkContent extends Content {
  constructor(
    public url: (null | URL) = null,
    public text: (null | string) = null,
    ) {
    super();
  }
}


export class Card {
  constructor(
    public size: ('small' | 'medium' | 'large') = 'medium',
    public direction: ('horizontal' | 'vertical') = 'vertical',
    public promoted: boolean = false,
    ) {
  }
}


export class Post {
  constructor(
    public slug: (null |string) = null,
    public title: (null |string) = null,
    public summary: (null | string) = null,
    public author: (null | string) = null,
    public category: (null | string) = null,
    public image: (null | ImageContent) = null,
    public card: (null | Card) = null,
    public tags: (string[]) = [],
    public createdAt: (null | Date) = new Date(),
    public updatedAt: (null | Date) = new Date(),
    ) {
  }
}

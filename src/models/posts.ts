abstract class Content {
  //
}


class ImageContent extends Content {
  constructor(
    public url : (null | URL) = null,
    public alt : (null | string) = null,
    public caption : (null | string) = null,
    ) {
    super();
  }
}


class TextContent extends Content {
  constructor(
    public text: (null | string) = null,
    ) {
    super();
  }
}


class CodeContent extends Content {
  constructor(
    public code: (null | string) = null,
    public language: (null | string) = null,
    ) {
    super();
  }
}


class VideoContent extends Content {
  constructor(
    public url: (null | URL) = null,
    ) {
    super();
  }
}


class AudioContent extends Content {
  constructor(
    public url: (null | URL) = null,
    ) {
    super();
  }
}


class LinkContent extends Content {
  constructor(
    public url: (null | URL) = null,
    public text: (null | string) = null,
    ) {
    super();
  }
}


class Card {
  constructor(
    public size: ('small' | 'medium' | 'large') = 'medium',
    public direction: ('horizontal' | 'vertical') = 'vertical',
    public promoted: boolean = false,
    ) {
  }
}


class Post {
  constructor(
    public slug: string = '',
    public title: string = '',
    public image: (null | ImageContent) = null,
    public summary: string = '',
    public tags: string[] = [],
    public body: Content[] = [],
    public card: Card = new Card(),
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    ) {
  }
}

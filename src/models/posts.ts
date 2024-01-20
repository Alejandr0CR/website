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

  static DIRECTION_HORIZONTAL: 'horizontal' = 'horizontal';
  static DIRECTION_VERTICAL: 'vertical' = 'vertical';

  static SIZE_SMALL: 'small' = 'small';
  static SIZE_MEDIUM: 'medium' = 'medium';
  static SIZE_LARGE: 'large' = 'large';

  constructor(
    public size: ('small' | 'medium' | 'large') = 'medium',
    public direction: ('horizontal' | 'vertical') = 'vertical',
    public promoted: boolean = false,
    ) {
  }
}


export class Post {

  static CATEGORY_LABORATORY: 'laboratory' = 'laboratory';
  static CATEGORY_SHORT: 'short' = 'short';
  static CATEGORY_STORY: 'story' = 'story';
  static CATEGORY_THOUGHT: 'thought' = 'thought';

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


export enum PostCategory {
  LABORATORY = 'laboratory',
  SHORT = 'short',
  STORY = 'story',
  THOUGHT = 'thought',
}

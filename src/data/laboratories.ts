import {
  AudioContent,
  Card,
  CodeContent,
  ImageContent,
  LinkContent,
  Post,
  PostCategory,
  TextContent,
  VideoContent,
} from '../models/posts';


const postsList: Array<Post> = [
  new Post(
    'laboratory-test',
    'title',
    'Officia do minim duis labore commodo est magna officia cillum. Id laboris ullamco est nostrud minim quis culpa consectetur occaecat. Cillum mollit cillum cillum proident laboris proident dolor enim eiusmod. Aute excepteur sit dolor sunt nulla sunt mollit est est enim nulla. Laborum cupidatat sunt ullamco nostrud deserunt adipisicing proident occaecat ex. Aliquip Lorem mollit sit amet eu mollit consequat minim officia ad nulla do.',
    'author',
    PostCategory.LABORATORY,
    new ImageContent(new URL('https://picsum.photos/1600/1000'), 'alt', 'caption'),
    new Card(Card.SIZE_SMALL, Card.DIRECTION_VERTICAL, true),
  ),
];


export default postsList;

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
    'despliegue-django-nginx-asgi',
    'Despliegue de una aplicación Django con Nginx y ASGI',
    'Pon en marcha una aplicación Django desde cero en un servidor linux usando Nginx como servidor web y ASGI para la comunicación entre el servidor y la aplicación.',
    'Alejandro Carrasco Rodríguez',
    PostCategory.LABORATORY,
    new ImageContent('/images/blog/despliegue-django-nginx-asgi.png', 'alt', 'caption'),
    new Card(Card.SIZE_SMALL, Card.DIRECTION_VERTICAL, true),
  ),
];


export default postsList;

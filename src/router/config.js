export const router = [
  {
    path: '/',
    name: 'HelloWorld',
    component: 'HelloWorld',
    children: [
      {
        path: '/demo1',
        name: 'Demo1',
        component: 'Demo1'
      },
      {
        path: '/demo2',
        name: 'Demo2',
        component: 'Demo2'
      }
    ]
  },
  {
    path: '/hello',
    name: 'Hello',
    component: 'input'
  },
  {
    path: '/note',
    name: 'Note',
    component: 'Note',
    children: [
      {
        path: '/note/note-page',
        name: 'NotePage',
        component: 'Note/NotePage'
      },
      {
        path: '/note/note-num',
        name: 'NoteNum',
        component: 'Note/NoteNum'
      }
    ]
  },
  {
    path: '/page',
    name: 'Page',
    component: 'Page'
  },
  {
    path: '/modifymm',
    name: 'Page',
    component: 'modifymm'
  },
  {
    path: '/huahzhuan',
    name: 'huahzhuan',
    component: 'huahzhuan'
  },
  {
    path: '/shiyong',
    name: 'shiyong',
    component: 'shiyong'
  }
];

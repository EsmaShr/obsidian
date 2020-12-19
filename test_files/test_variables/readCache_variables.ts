export const test = {
  cache: {
    ROOT_QUERY: {
      'actor(id:1)': 'Actor~1',
      movies: ['Movie~1', 'Movie~2', 'Movie~3', 'Movie~4'],
      actors: ['Actor~1', 'Actor~2', 'Actor~3', 'Actor~4'],
      'movies(input:{genre:ACTION})': ['Movie~1', 'Movie~4', 'Movie~5'],
    },
    'Movie~1': {
      id: '1',
      title: 'Indiana Jones and the Last Crusade',
      actors: ['Actor~1', 'Actor~2', 'Actor~6'],
      genre: 'ACTION',
      releaseYear: 1989,
    },
    'Movie~2': {
      id: '2',
      title: 'Empire Strikes Back',
      actors: ['Actor~1', 'Actor~3'],
      releaseYear: 1980,
    },
    'Movie~3': {
      id: '3',
      title: 'Witness',
      actors: ['Actor~1', 'Actor~4'],
      releaseYear: 1985,
    },
    'Movie~4': {
      id: '4',
      title: 'Air Force One',
      actors: ['Actor~1', 'Actor~5'],
      genre: 'ACTION',
      releaseYear: 1997,
    },
    'Movie~5': 'DELETED',
    'Actor~1': { id: '1', firstName: 'Harrison' },
    'Actor~2': { id: '2', firstName: 'Sean' },
    'Actor~3': { id: '3', firstName: 'Mark' },
    'Actor~4': { id: '4', firstName: 'Patti' },
    'Actor~5': { id: '5', firstName: 'Gary' },
    'Actor~6': 'DELETED',
  },
  singularInputQuery: `
    query getActorById {
      actor(id: 1) {
        __typename
        id
        firstName
      }
    }
  `,
  undefinedInputQuery: `
    query getActorById {
      actor(id: 1) {
        __typename
        id
        firstName
        lastName
      }
    }
  `,
  multipleInputQuery: `
    query AllActionMoviesAndAllActors {
      movies(input: { genre: ACTION }) {
         __typename
         id
         title
         genre
         actors {
           __typename
           id
           firstName
         }
       }
        actors {
         __typename
         id
        firstName
      }
     }
    }
  `,
  fieldsUndefined: {
    __typename: 'meta',
    id: 'scalar',
    firstName: 'scalar',
    lastName: 'scalar',
  },
  fieldsComplete: { __typename: 'meta', id: 'scalar', firstName: 'scalar' },
  singularQueryResObj: {
    data: {
      actor: {
        __typename: 'Actor',
        id: '1',
        firstName: 'Harrison',
      },
    },
  },
  multipleQueriesResObj: {
    data: {
      movies: [
        {
          __typename: 'Movie',
          id: '1',
          title: 'Indiana Jones and the Last Crusade',
          genre: 'ACTION',
          actors: [
            {
              __typename: 'Actor',
              id: '1',
              firstName: 'Harrison',
            },
            {
              __typename: 'Actor',
              id: '2',
              firstName: 'Sean',
            },
          ],
        },
        {
          __typename: 'Movie',
          id: '4',
          title: 'Air Force One',
          genre: 'ACTION',
          actors: [
            {
              __typename: 'Actor',
              id: '1',
              firstName: 'Harrison',
            },
            {
              __typename: 'Actor',
              id: '5',
              firstName: 'Gary',
            },
          ],
        },
      ],
      actors: [
        {
          __typename: 'Actor',
          id: '1',
          firstName: 'Harrison',
        },
        { __typename: 'Actor', id: '2', firstName: 'Sean' },
        { __typename: 'Actor', id: '3', firstName: 'Mark' },
        { __typename: 'Actor', id: '4', firstName: 'Patti' },
      ],
    },
  },
  queryStrDelete: `
  query AllActionMoviesAndAllActors {
    movies(input: { genre: ACTION }) {
       __typename
       id
       title
       genre
       actors {
         __typename
         id
         firstName
       }
     }
      actors {
       __typename
       id
      firstName
    }
   }
  }
  `,
};

const theme = {
  global: {
    backgroundColor: '#280264',
    button: {
      backgroundColor: '#5760FF',
    },
  },
  constrast: {
    backgroundColor: '#3b007a',
  },
  tasks: {
    status: {
      backgroundColor: {
        PENDING: 'red',
        DELAYED: 'yellow',
        'IN PROGRESS': 'blue',
      },
      color: {
        PENDING: 'black',
        DELAYED: 'black',
        'IN PROGRESS': 'black',
      }
    },
  },
  searchInput: {
    backgroundColor: '#440784',
    color: '#917cbe',
  },
  tab: {
    borderColor: '#440784',
  },
};

export default theme;

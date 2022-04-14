import { styled } from '@stitches/react';

export const Div = styled('div', {
  variants: {
    type: {
      cont: {
        position: 'relative',
        backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
        length: '100%',
        height: '100%',
      },
      timer: {
        position: 'relative',
        textAlign: 'center',
        border: '1px solid black',
        margin: '1px 10px',
        '&:hover': {
          backgroundImage:
            'linear-gradient(to right, #2fb2ff, #22e8fa, #b6ffdb)',
        },
      },
      defaultVariants: {
        position: 'relative',
        backgroundImage: 'black',
        color: 'white',
        length: '100%',
        height: '100%',
      },
    },
  },
});

export const Span = styled('span', {
  fontSize: '50px',
  fontFamily: 'cursive',
});

export const H1 = styled('h1', {
  fontFamily: 'cursive',
  textAlign: 'center',
  fontSize: '50px',
});

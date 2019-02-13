import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  padding: 4rem 8rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

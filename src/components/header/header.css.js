import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #e8e8e8;
    transition: color 0.2s ease;
    text-decoration: none;

    // &:hover {
    //   color: #41c7c7;
    // }
  }

  a:hover:before {
    // display: none;
  }

  a:hover:after {
      content: 'william chandler';
      color: #e8e8e8;
  }

`;




// .hover-me:before {
//     content: 'new';
//     display: inline-block;
//     background: green;
//     color: white;
//     padding: 3px;
// }
// .hover-me:hover:before {
//     content: 'add';
//     background-color: red;
// }
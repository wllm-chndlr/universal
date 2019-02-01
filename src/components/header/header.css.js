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

    // h1:before {
    //   color: #e8e8e8;
    //   content: 'wllm chndlr'
    // }

    // h1:hover:after {
    //   display: none;
    // }

    // h1:hover:before {
    //   content: 'william chandler';
    //   color: #e8e8e8;
    // }
  }

  a:hover h1 {
      display: none
  };

  a:hover:before {
      content: "WILLIAM CHANDLER"
    //   color: #e8e8e8;
    //   transition: color 0.2s ease;
    //   text-decoration: none;
  };

`;
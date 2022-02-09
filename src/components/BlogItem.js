import Link from 'gatsby-link'
import styled from 'styled-components'

export default styled(Link)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  background: var(--clr-white);
  border: 1px solid var(--clr-gray-light);
  border-radius: 5px;
  display: block;
  padding: 1.5em 1em;
  margin: 2em 0;
  max-width: 35rem;
  position: relative;
  transition: all 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px 0px;
  }

  .blogItem__category {
    border: 1px solid var(--clr-gray);
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 1px 10px;
    position: absolute;
    right: 1em;
    top: 1.5em;
  }
`

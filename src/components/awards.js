import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"

// Helpers
import { getRandomColor } from "../utils/helpers"

// Styles
import { StyledAwards } from "../styles/StyledAwards"

const Awards = () => {
  return (
    <StaticQuery
      query={awardQuery}
      render={data => {
        const { awards } = data.award
        return (
          <StyledAwards>
            <h1>Awards & Honors</h1>
            <ul>
              {awards.map(award => (
                <li key={award.id}>
                  <i
                    className="fas fa-star"
                    style={{ color: getRandomColor() }}
                  ></i>
                  {award.name}
                </li>
              ))}
            </ul>
          </StyledAwards>
        )
      }}
    />
  )
}

const awardQuery = graphql`
  query AwardQuery {
    award: datoCmsAward {
      awards {
        id
        name
      }
    }
  }
`

export default Awards

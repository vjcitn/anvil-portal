import {useStaticQuery, graphql} from 'gatsby';

export const navStaticQuery = () => {
    const {allSiteMapYaml} = useStaticQuery(
        graphql`
        query NavStaticQuery {
          allSiteMapYaml {
            edges {
              node {
                name
                key
                path
                primaryLinks {
                    name
                    key
                    path
                }
              }
            }
          }
        }
    `
    );
    return allSiteMapYaml.edges.map(e => e.node);
};

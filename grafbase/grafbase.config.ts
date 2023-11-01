import { g, auth, config } from '@grafbase/sdk'

// Creating User Table
const User = g.model('User', {
  name: g.string().length({min: 2, max: 20}),      // 'g'-schema     'length({min: 2, max: 20})'- extra feature that limits the name length
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).optional()
})


// Creating Projects Table
const Project = g.model('Project', {
  title: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),   // we are creating a developers site, u'll be able to share projects live urls
  githubUrl: g.url(),
  category: g.string().search(),      // search() - this is going to alow us to search through categories
  createdBy: g.relation(() => User)
})


export default config({
  schema: g
})

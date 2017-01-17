import users from './users'
import tweets from './tweets'

import { createModule } from 'vuex-toast'

export default {
  users,
  tweets,
  toast: createModule()
}

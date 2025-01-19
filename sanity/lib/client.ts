import { createClient } from 'next-sanity'

import { apiVersion} from '../env'

export const client = createClient({
  projectId:"wj5gd26k",
  dataset:"production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

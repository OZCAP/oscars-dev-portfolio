import { createClient } from '@supabase/supabase-js'
import ReactMarkdown from 'react-markdown'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//@ts-ignore
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface Section {
  page: string,
  element: string,
  text: string,
}

export default function filterPageData(page: string, sections: Array<Section>) {
  let pageContent = {}
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].page == page) {
      const obj = {
        [sections[i].element]: sections[i].text
      }
      Object.assign(pageContent, obj);
    }
  }
  return pageContent
}
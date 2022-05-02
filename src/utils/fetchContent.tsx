import { createClient } from '@supabase/supabase-js'
import ReactMarkdown from 'react-markdown'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//@ts-ignore
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default async function fetchContent(table: string, columns: string) {
    const res = await supabase
      .from(table)
      .select(columns)
      .order('num', { ascending: false })
    return (res.data)
}
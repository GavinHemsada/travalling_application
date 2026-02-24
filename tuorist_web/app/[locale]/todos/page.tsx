import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul className="p-8 list-disc list-inside">
      {todos?.map((todo: any, idx: number) => (
        <li key={idx} className="mb-2">
          {typeof todo === 'object' ? JSON.stringify(todo) : todo}
        </li>
      ))}
      {(!todos || todos.length === 0) && <p>No todos found</p>}
    </ul>
  )
}

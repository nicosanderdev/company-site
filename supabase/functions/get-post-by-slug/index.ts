// supabase/functions/get-post-by-slug/index.ts
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  const { slug } = await req.json()

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  )
  
  const { data, error } = await supabase
    .from('articles')
    .select(`
      id,
      created_at,
      title,
      content,
      slug,
      authorId:author_id,
      is_published,
      excerpt,
      featured_image_url,
      comments ( * ),
      tags ( name )
    `)
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 404,
    })
  }
  
  const responseData = {
    ...data,
    tags: data.tags.map(t => t.name)
  }

  return new Response(JSON.stringify(responseData), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200,
  })
})
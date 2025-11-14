import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (_req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  )

  const { data, error } = await supabase
    .from('articles')
    .select(`
      id,
      title,
      excerpt,
      featuredImage:featured_image_url,
      publishedAt:created_at,
      author:profiles ( name:username ),
      tags ( name )
    `)
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }

  const articlesMetadata = data.map(article => ({
    ...article,
    author: article.author.name,
    tags: article.tags.map(tag => tag.name),
  }))

  return new Response(JSON.stringify(articlesMetadata), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200,
  })
})
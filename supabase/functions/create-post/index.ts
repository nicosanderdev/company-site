// supabase/functions/create-post/index.ts
import { createSupabaseClient } from '../_shared/supabase-client.ts'
import { corsHeaders, handleCors } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return handleCors()
  }

  try {
    const supabase = createSupabaseClient(req)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('User not authenticated')

    const { articleData, tags } = await req.json()
    const { title, content, slug, is_published, excerpt, featured_image_url } = articleData

    const { data: newArticle, error: articleError } = await supabase
      .from('articles')
      .insert({
        title, content, slug, is_published, excerpt, featured_image_url,
        author_id: user.id
      })
      .select('id')
      .single()

    if (articleError) throw articleError

    if (tags && tags.length > 0) {
      
      const { data: tagData, error: tagsError } = await supabase
        .from('tags')
        .upsert(tags.map((name: string) => ({ name })), { onConflict: 'name' })
        .select('id, name')

      if (tagsError) throw tagsError

      const articleTagLinks = tagData.map(tag => ({
        article_id: newArticle.id,
        tag_id: tag.id
      }))

      const { error: linkError } = await supabase
        .from('article_tags')
        .insert(articleTagLinks)

      if (linkError) throw linkError
    }

    return new Response(JSON.stringify({ article: newArticle }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 201,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 401,
    })
  }
})
export const createSupabaseClient = (req: Request) => {
    const authHeader = req.headers.get('Authorization')!
  
    // Create a new client with the user's auth token
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: { headers: { Authorization: authHeader } },
      }
    )
    return supabase
  }
  
  // You will also need a CORS preflight handler for POST requests
  export const handleCors = () => {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    })
  }